import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef, Output, EventEmitter, AfterViewInit
} from '@angular/core';

import videojs from 'video.js';
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
// import * as WaveSurfer from 'wavesurfer.js';
import * as WaveSurferRegions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js';
@Component({
  selector: 'app-videojs-record',
  templateUrl: './videojs-record.component.html',
  styleUrls: ['./videojs-record.component.scss']
})
export class VideojsRecordComponent implements OnInit, OnDestroy, AfterViewInit {
  private WaveSurfer = require('wavesurfer.js');
  // reference to the element itself: used to access events and methods
  // private _elementRef: ElementRef;
  @Output() recordingEmit: EventEmitter<Blob> = new EventEmitter<Blob>();
  // index to create unique ID for component
  idx = 'clip1';

  private config: any;
  private player: any;
  private plugin: any;

  // constructor initializes our declared vars
  constructor(elementRef: ElementRef) {
    this.player = false;

    // save reference to plugin (so it initializes)
    this.plugin = Record;
    // const ws  = WaveSurfer.create( {
    //     container: this.player,
    //     backend: 'WebAudio',
    //     waveColor: '#36393b',
    //     progressColor: 'black',
    //     debug: true,
    //     cursorWidth: 1,
    //     displayMilliseconds: true,
    //     hideScrollbar: true,
    //     plugins: [
    //       // enable microphone plugin
    //       WaveSurfer.microphone.create({
    //         bufferSize: 4096,
    //         numberOfInputChannels: 1,
    //         numberOfOutputChannels: 1,
    //         constraints: {
    //           video: false,
    //           audio: true
    //         }
    //       })
    //     ]
    //   });

      // video.js configuration
    this.config = {
      controls: true,
      // autoplay: false,
      fluid: false,
      // loop: false,
      width: 80,
      height: 45,
      bigPlayButton: false,
      controlBar: {
        volumePanel: false,
        fullscreenToggle: false,
        bigPlayButton: false
      },
      plugins: {
        // wavesurfer section is only needed when recording audio-only
        // configure videojs-record plugin
        // wavesurfer: ws,
        record: {
          audio: true,
          screen: true,
          // video: true,
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
    this.player = videojs(document.getElementById(el), this.config, () => {
      console.log('player ready! id:', el);

      // print version information at startup
      const msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(msg);
    });

    // device is ready
    this.player.on('deviceReady', () => {
      console.log('device is ready!');
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log('finished recording: ', this.player.recordedData);
      // const recordedDataMp4 = this.player.record().saveAs({video: 'my-video-file-name.mp4'}, 'convert');
      // console.log(recordedDataMp4);
      // this.recordingEmit.emit(recordedDataMp4);
      this.recordingEmit.emit(this.player.recordedData);
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
    this.player.record().start();
  }

}
