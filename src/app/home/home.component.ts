import { Component, OnInit } from "@angular/core";
import { interval, timer, fromEvent } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit(): void {
    // add event listner to click is a stream of value that never complete
    //  document.addEventListener("click", (event) => {
    //    console.log(event);
    //  });
    //  // setInterval is a stream of value that never complete
    //  setInterval(() => {
    //    console.log(this.counter);
    //    this.counter++;
    //  }, 1000);
    //  // setTimeout is a stream of value that  has only one value and complete  like an http request
    //  setTimeout(() => {
    //    console.log("finish");
    //  }, 3000);

    // imagine you want to combine this operations
    // document.addEventListener("click", (event) => {
    //   console.log(event);
    //   setTimeout(() => {
    //     console.log("finish");
    //     setInterval(() => {
    //       console.log(this.counter);
    //       this.counter++;
    //     }, 1000);
    //   }, 3000);
    // });

    // rxjs
    // 1- definition of the stream
    // const interval$ = interval(1000);
    // // lancer l'application, rien ne se passe, ceci n'est pas flux de donnée, mais simplement une définition d'un flux de donnée
    // // Un observable devient un flux de données uniquement si on souscrit
    // interval$.subscribe((value) => console.log("stream 1=>", value));
    // interval$.subscribe((value) => console.log("stream 2=>", value));

    // // rxjs
    // // 1- definition of the stream
    // const timer$ = timer(3000, 1000);
    // // lancer l'application, rien ne se passe, ceci n'est pas flux de donnée, mais simplement une définition d'un flux de donnée
    // // Un observable devient un flux de données uniquement si on souscrit
    // timer$.subscribe((value) => console.log("timer=>", value));

    // const click$ = fromEvent(document, "click");
    // click$.subscribe((event) => console.log(event));
  }
}
