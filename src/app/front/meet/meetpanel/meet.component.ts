import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
//import { Room } from 'src/app/models/room';
// import { MeetService } from 'src/app/services/meet.service';
import { v4 as uuid } from 'uuid';

declare var JitsiMeetExternalAPI:any;
@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class JitsiComponent implements OnInit,AfterViewInit {
      domain: string = "meet.jit.si";
      room: any;
      options: any;
      api: any;
      user!: User;

      isAudioMuted = false;
      isVideoMuted = false;

      constructor ( private router: Router ) {


       }
       storageUserAsStr: User = localStorage.getItem('currentUser')
       ? JSON.parse(localStorage.getItem('currentUser') || '{}')
       : null;
      ngOnInit(): void {

          this.room = uuid();
          this.user = this.storageUserAsStr;

      }

      ngAfterViewInit(): void {
          this.options = {
              roomName: this.room,
              width: 900,
              height: 500,
              configOverwrite: { prejoinPageEnabled: true },
              interfaceConfigOverwrite: {
                  GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false ,
                  DISABLE_VIDEO_BACKGROUND: false,
                  DISPLAY_WELCOME_FOOTER: false ,
                  DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD: false,
                  DISPLAY_WELCOME_PAGE_CONTENT: false,
                  DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false,
                                        },
              parentNode: document.querySelector('#meet-iframe'),
              userInfo: {
                  displayName: this.user.fname,
                  email: this.user.email
              } ,

          }


          this.api = new JitsiMeetExternalAPI(this.domain, this.options);

          this.api.addEventListeners({
              readyToClose: this.handleClose,
              participantLeft: this.handleParticipantLeft,
              participantJoined: this.handleParticipantJoined,
              videoConferenceJoined: this.handleVideoConferenceJoined,
              videoConferenceLeft: this.handleVideoConferenceLeft,
              audioMuteStatusChanged: this.handleMuteStatus,
              videoMuteStatusChanged: this.handleVideoStatus,
              peerConnection : this.handlePeerConnection
          });
      }


      handleClose = () => {
          console.log("handleClose");
      }

      handleParticipantLeft = async (participant:any) => {
          console.log("handleParticipantLeft", participant); // { id:uuid }
          const data = await this.getParticipants();
      }

      handleParticipantJoined = async (participant:any) => {
          console.log("handleParticipantJoined", participant); // { id ,Displayname iframe:api docs }
          const data = await this.getParticipants();
          console.log(this.getParticipants);
      }

      handleVideoConferenceJoined = async (participant:any) => {
          console.log("handleVideoConferenceJoined", participant);
          const data = await this.getParticipants();
      }

      handleVideoConferenceLeft = () => {
          console.log("handleVideoConferenceLeft");
          this.router.navigate(['/quit']); // ecit screen route when the call is ended
      }

      handleMuteStatus = (audio:any) => {
          console.log("handleMuteStatus", audio); // { muted: true }
      }

      handleVideoStatus = (video:any) => {
          console.log("handleVideoStatus", video); // { muted: true }
      }
      handlePeerConnection = (participant:any) => {
          console.log ("conncetion status" ,participant);


      }

      getParticipants() {
          return new Promise((resolve) => {
              setTimeout(() => {
                  resolve(this.api.getParticipantsInfo()); // get all participants
              }, 500)
          });
      }
      // getRooms(){
      //     return this.api.getRoomsInfo().then( rooms => {
      //         alert(rooms)

      //     })    }

      // custom events
      executeCommand(command: string) {
          this.api.executeCommand(command);;
          if(command == 'hangup') {
              this.router.navigate(['/quit']);
              return;
          }

          if(command == 'toggleAudio') {
              this.isAudioMuted = !this.isAudioMuted;
          }

          if(command == 'toggleVideo') {
              this.isVideoMuted = !this.isVideoMuted;
          }
      }
  }



































// user: any;
// domain = 'meet.jit.si';
// options: any;
// isAudioMuted = false;
// isVideoMuted = false;
// api:any;
// room!:Room;

// constructor(private router:Router ) {}
// ngOnInit(): void {
//   this.user = {
//     name: '' // to get user name using Token
//   };
//   this.room.name = uuid();
// }

// ngAfterViewInit(): void {
//   this.options = {
//     roomName: this.room,
//     //jwt: '<jwt_token>',
//     width: 900,
//     height: 500,
//     configOverwrite: { prejoinPageEnabled: true },
//     interfaceConfigOverwrite: {
//       GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
//       DISABLE_VIDEO_BACKGROUND: false,
//       DISPLAY_WELCOME_FOOTER: false,
//       DISPLAY_WELCOME_PAGE_ADDITIONAL_CARD: false,
//       DISPLAY_WELCOME_PAGE_CONTENT: false,
//       DISPLAY_WELCOME_PAGE_TOOLBAR_ADDITIONAL_CONTENT: false
//     },

//     parentNode: document.querySelector('#jitsi-iframe'),
//     userInfo: {
//       displayName: ''
//       //id: user.id
//       //role: user.role
//     }

//   };

//   this.api = new JitsiMeetExternalAPI(this.domain, this.options);

//     this.meetService.api.addEventListeners({
//     readyToClose: this.handleClose,
//     participantLeft: this.handleParticipantLeft,
//     participantJoined: this.handleParticipantJoined,
//     videoConferenceJoined: this.handleVideoConferenceJoined,
//     videoConferenceLeft: this.handleVideoConferenceLeft,
//     audioMuteStatusChanged: this.handleMuteStatus,
//     videoMuteStatusChanged: this.handleVideoStatus,
//     peerConnection: this.handlePeerConnection
//   });
// }

// handleClose = () => {
//   console.log('handleClose');
// };

// handleParticipantLeft = async (participant: any) => {
//   console.log('handleParticipantLeft', participant); // { id:uuid }
//   const data = await this.meetService.getParticipants();
// };

// handleParticipantJoined = async (participant:any) => {
//   console.log('handleParticipantJoined', participant); // { id ,Displayname iframe:api docs }

// }

// handleVideoConferenceJoined = async (participant:any) => {
//   console.log("handleVideoConferenceJoined", participant);
//   const data = await this.meetService.getParticipants();
// }

// handleVideoConferenceLeft = () => {
//   console.log("handleVideoConferenceLeft");
//   this.router.navigate(['/quit']); // route when the call is ended
// }

// handleMuteStatus = (audio:any) => {
//   console.log("handleMuteStatus", audio); // { muted: true }
// }

// handleVideoStatus = (video:any) => {
//   console.log("handleVideoStatus", video); // { muted: true }
// }
// handlePeerConnection = (participant:any) => {
//   console.log ("conncetion status" ,participant);


// }
// executecommands = (command:string) => {
//   this.meetService.executeCommand(command);
// }
// }

