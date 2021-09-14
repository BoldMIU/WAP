"use strict";
$(document).ready(function () {
  class Maze {
    constructor() {
      this.started = false;
      this.lost = null;
    }

    getStarted() {
      this.started = true;
      $("#status").text("Game started...");
    }

    stop() {
      this.started = false;
    }

    isStarted() {
      return this.started;
    }

    lose() {
      this.lost = true;
    }

    win() {
      this.lost = false;
    }

    restart() {
      this.lost = null;
    }

    isLost() {
      return this.lost;
    }
  }

  function restart() {
    $("#status").text('Click the "S" to begin.');
    $(".boundary").removeClass("youlose");
    maze.stop();
    maze.restart();
  }

  function lose() {
    maze.lose();
    maze.stop();
    $(".boundary").addClass("youlose");
    $("#status").text("Sorry, you lost :(");
  }

  function win() {
    $(".boundary").removeClass("youlose");
    $("#status").text("You win! :)");
    maze.win();
    maze.stop();
  }

  const maze = new Maze();

  $(".boundary")
    .mouseenter(function () {
      if (!maze.isStarted()) $(this).addClass("youlose");

      if (maze.isStarted() && !maze.isLost()) lose();
    })
    .mouseleave(function () {
      if (!maze.isStarted() && !maze.isLost()) $(this).removeClass("youlose");
    });

  $("#start")
    .click(function () {
      maze.getStarted();
    })
    .mouseenter(function () {
      if (!maze.isStarted()) restart();
    });

  $("#end").mouseenter(function () {
    if (maze.isStarted() && maze.isLost() === null) win();
  });

  $("#maze").mouseleave(function () {
    if (maze.isStarted()) lose();
  });
});
