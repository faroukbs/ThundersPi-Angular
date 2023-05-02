// import { Injectable } from '@angular/core';


// declare var JitsiMeetExternalAPI: any;

// @Injectable({
//   providedIn: 'root'
// })


// export class MeetService {

//   api: any;
//   domain = 'meet.jit.si';
//   options:any;

//   constructor() {
//     this.api = new JitsiMeetExternalAPI(this.domain,this.options);
//   }

//    getParticipants() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(this.api.getParticipantsInfo());
//       }, 500);
//     });
//   }

//   getRooms() {
//     return this.api.getRoomsInfo();
//   }

//   executeCommand(command: string) {
//     this.api.executeCommand(command);
//   }
// }
