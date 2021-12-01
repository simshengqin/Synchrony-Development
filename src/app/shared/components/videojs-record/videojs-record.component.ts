import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef, Output, EventEmitter, AfterViewInit, ViewChild, Input
} from '@angular/core';

import videojs, {VideoJsPlayer} from 'video.js';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as RecordRTC from 'recordrtc';


// Required imports when recording audio-only using the videojs-wavesurfer plugin
import * as WaveSurfer from 'wavesurfer.js';

import * as MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;

// Register videojs-wavesurfer plugin
import * as Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';


// register videojs-record plugin with this import
import * as Record from 'videojs-record/dist/videojs.record.js';
import 'videojs-record/dist/plugins/videojs.record.ts-ebml.js';
declare var require: any;
import * as WaveSurferRegions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js';
import {ConfirmModalComponent} from "../confirm-modal/confirm-modal.component";
@Component({
  selector: 'app-videojs-record',
  templateUrl: './videojs-record.component.html',
  styleUrls: ['./videojs-record.component.scss']
})
export class VideojsRecordComponent implements OnInit, OnDestroy, AfterViewInit {
  private WaveSurfer = require('wavesurfer.js');
  // reference to the element itself: used to access events and methods
  // private _elementRef: ElementRef;
  @Output() startedRecordingEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() recordingEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() feedbackEmit: EventEmitter<any> = new EventEmitter<any>();
  // index to create unique ID for component
  idx = 'clip1';

  private config: any;
  player: any;
  private plugin: any;
  isRecording = false;
  isPaused = false;
  isRecorded = false;
  @Input() selectedRecordingOption;
  // constructor initializes our declared vars
  constructor(elementRef: ElementRef) {
    this.player = false;

    // save reference to plugin (so it initializes)
    this.plugin = Record;

      // video.js configuration
    this.config = {
      controls: true,
      // autoplay: false,
      fluid: false,
      // fill: true,
      // loop: false,
      width: 410,
      height: 240,
      bigPlayButton: false,
      controlBar: {
        volumePanel: true,
        fullscreenToggle: false,
        bigPlayButton: false
      },
      plugins: {
        // wavesurfer section is only needed when recording audio-only
        // configure videojs-record plugin
        // wavesurfer: ws,
        record: {
          audio: true,
          debug: true,
          displayMilliseconds: false,
          maxLength: 600,
          convertEngine: 'ts-ebml'
        }
      }
    };
  }

  ngOnInit(): void {}

  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered
  ngAfterViewInit(): void {
    // ID with which to access the template's video element
    const el = 'video_' + this.idx;
    // setup the player via the unique element ID
    this.config.plugins.record.screen = this.selectedRecordingOption !== 'Camera Recording';
    this.config.plugins.record.video = this.selectedRecordingOption === 'Camera Recording';
    this.player = videojs(document.getElementById(el), this.config, () => {
      // print version information at startup
      const msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(msg);
    });
    // device is ready
    this.player.on('deviceReady', () => {
      this.player.record().start();
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      this.isRecording = true;
      this.startedRecordingEmit.emit();
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      this.recordingEmit.emit([this.player.recordedData, this.player.record().streamCurrentTime]);

    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }

  // use ngOnDestroy to detach event handlers and remove the player
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
      this.player = false;
    }
  }

  startRecording(): void {
    this.player.record().getDevice();
    this.player.record().start();
    this.isRecording = true;
  }

  startRerecording(): void {
    this.player.record().start();
    this.isRecording = true;
  }
  pauseRecording(): void {
    this.isPaused = true;
    this.player.record().pause();
  }
  resumeRecording(): void {
    this.isPaused = false;
    this.player.record().resume();
  }
  stopRecording(): void {
    this.player.record().stop();
    this.isPaused = false;
    this.isRecording = false;
    this.isRecorded = true;
  }
  submitFeedback(): void {
    this.feedbackEmit.emit();
  }
}
