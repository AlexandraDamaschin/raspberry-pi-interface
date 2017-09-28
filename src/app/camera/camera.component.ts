import { Observable } from 'rxjs/Rx';
import { WebCamComponent } from 'ack-angular-webcam/webcam.component';
import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild(WebCamComponent) webCam: WebCamComponent;
  @ViewChild('camera') cameraBox: ElementRef;

  background = "../assets/images/background/sligo.jpg";
  public cameraReady = false;
  public webcam;
  public options: any;
  constructor(private element: ElementRef, private _renderer: Renderer) {
    //init the camera
    this.options = {
      audio: true,
      video: true,
      fallbackQuality: 200,
      fallbackSrc: 'fallback/jscam_canvas_only.swf'
    };

    //waiting for camera to start up before enabling the view
    this.loadCameraDisplay().subscribe(() => { this.cameraReady = true; });
  }

  ngOnInit() {
  }

  loadCameraDisplay() {
    return Observable.fromPromise(new Promise(resolve => setTimeout(resolve, 3000)));
  }

  onSuccess(stream: any) {
  };

  onError(err) {
    console.log(err);
  };

  ngAfterViewInit() {
    //set the dimensions of the camera box
    this.options.width = this.cameraBox.nativeElement.offsetWidth - 40;
    this.options.height = this.cameraBox.nativeElement.offsetHeight;
  }

}
