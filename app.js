addEventListener('load', function(e) {

    const semitones = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"];
    
    const notes = "ABCDEFGABCDEFG";
    
    const selectEl = document.querySelector("select");
    
    const butt = document.querySelector("button");
    
    const scales = ['major', 'minor', 'melodic minor', 'harmonic minor', 'penta blues', 'dom dim', 'altered scale'];
    
    for(scale of scales) {
      const optEl = document.createElement("option");
    
      optEl.innerHTML = scale;
      optEl.setAttribute('value', scale);
      selectEl.appendChild(optEl);
    }
    
    function renderContent() {
      document.querySelector('#scale').innerHTML = getScale().join(", ");
    
    
      if(selectEl.value === "major" ||
         selectEl.value === "minor" ||
         selectEl.value === "melodic minor" ||
         selectEl.value === "harmonic minor") {
           document.querySelector("#chords").innerHTML = harmonicField(getScale());
      } else {
        document.querySelector("#chords").innerHTML = "";
      }
    }
    
    butt.addEventListener('click', renderContent);
    
    function intervalToNote(fn, int) {
    
      let nextNote;
      let freeNote = fn[0];
       
      if(/[ACDFG]$/.test(fn) || /[BE]b$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1];
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "b";
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "#";
        }
      }
    
      if(/[ACDFG]#$/.test(fn) || /[BE]$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "#";
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1];
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "##";
        }
      }
    
      if(/[ACDFG]b$/.test(fn) || /[BE]bb$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "b";
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "bb";
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1];
        }
      }
    
      if(/[ACDFG]##$/.test(fn) || /[BE]#$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "##";
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "#";
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "###";
        }
      }
    
      if(/[ACDFG]bb$/.test(fn) || /[BE]bbb$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "bb";
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "bbb";
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "b";
        }
      }
    
      if(/[ACDFG]###$/.test(fn) || /[BE]##$/.test(fn)) {
    
        switch(int) {
          case("2M"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "###";
          case("2m"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "##";
          case("2aug"):
          return nextNote = notes[notes.indexOf(freeNote)+1] + "####";
        }
      }
    
      if(/[CFG]$/.test(fn) || /[ABDE]b$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2];
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "b";
        }
      }
    
      if(/[CFG]#$/.test(fn) || /[ABDE]$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "#";
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2];
        }
      }
    
      if(/[CFG]b$/.test(fn) || /[ABDE]bb$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "b";
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "bb";
        }
      }
    
      if(/[CFG]##$/.test(fn) || /[ABDE]#$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "##";
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "#";
        }
      }
    
      if(/[CFG]bb$/.test(fn) || /[ABDE]bbb$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "bb";
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "bbb";
        }
      }
    
      if(/[CFG]###$/.test(fn) || /[ABDE]##$/.test(fn)) {
    
        switch(int) {
          case("3M"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "###";
          case("3m"):
          return nextNote = notes[notes.indexOf(freeNote)+2] + "##";
        }
      }
    
      if(/[ABCDEG]$/.test(fn) || /[F]#$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3];
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "b";
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "#";
        }
      }
    
      if(/[ABCDEG]#$/.test(fn) || /[F]##$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "#";
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3];
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "##";
        }
      }
    
      if(/[ABCDEG]b$/.test(fn) || /[F]$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "b";
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bb";
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3];
        }
      }
    
      if(/[ABCDEG]##$/.test(fn) || /[F]###$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "##";
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "#";
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "###";
        }
      }
    
      if(/[ABCDEG]bb$/.test(fn) || /[F]b$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bb";
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bbb";
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "b";
        }
      }
    
      if(/[ABCDEG]bbb$/.test(fn) || /[F]bb$/.test(fn)) {
    
        switch(int) {
          case("4p"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bbb";
          case("4dim"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bbbb";
          case("4aug"):
          return nextNote = notes[notes.indexOf(freeNote)+3] + "bb";
        }   
      }
    
      if(/[ACDEFG]$/.test(fn) || /[B]b$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4];
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "b";
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "#";
        }
      }
    
      if(/[ACDEFG]#$/.test(fn) || /[B]$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "#";
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4];
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "##";
        }
      }
    
      if(/[ACDEFG]b$/.test(fn) || /[B]bb$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "b";
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "bb";
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4];
        }
      }
    
      if(/[ACDEFG]##$/.test(fn) || /[B]#$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "##";
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "#";
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "###";
        }
      }
    
      if(/[ACDEFG]bb$/.test(fn) || /[B]bbb$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "bb";
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "bbb";
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "b";
        }
      }
    
      if(/[ACDEFG]###$/.test(fn) || /[B]##$/.test(fn)) {
    
        switch(int) {
          case("5p"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "###";
          case("5dim"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "##";
          case("5aug"):
          return nextNote = notes[notes.indexOf(freeNote)+4] + "####";
        }
      }
    
      if(/[CDFG]$/.test(fn) || /[ABE]b$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5];
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "b";
        }
      }
    
      if(/[CDFG]#$/.test(fn) || /[ABE]$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "#";
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5];
        }
      }
    
      if(/[CDFG]b$/.test(fn) || /[ABE]bb$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "b";
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "bb";
        }
      }
    
      if(/[CDFG]##$/.test(fn) || /[ABE]#$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "##";
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "#";
        }
      }
    
      if(/[CDFG]bb$/.test(fn) || /[ABE]bbb$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "bb";
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "bbb";
        }
      }
    
      if(/[CDFG]###$/.test(fn) || /[ABE]##$/.test(fn)) {
    
        switch(int) {
          case("6M"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "###";
          case("6m"):
          return nextNote = notes[notes.indexOf(freeNote)+5] + "##";
        }
      }
    
      if(/[CF]$/.test(fn) || /[ABDEG]b$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6];
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "b";
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bb";
        }
      }
    
      if(/[CF]#$/.test(fn) || /[ABDEG]$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "#";
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6];
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "b";
        }
      }
    
      if(/[CF]b$/.test(fn) || /[ABDEG]bb$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "b";
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bb";
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bbb";
        }
      }
    
      if(/[CF]##$/.test(fn) || /[ABDEG]#$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "##";
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "#";
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6];
        }
      }
    
      if(/[CF]bb$/.test(fn) || /[ABDEG]bbb$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bb";
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bbb";
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "bbbb";
        }
      }
    
      if(/[CF]###$/.test(fn) || /[ABDEG]##$/.test(fn)) {
    
        switch(int) {
          case("7M"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "###"
          case("7m"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "##";
          case("7dim"):
          return nextNote = notes[notes.indexOf(freeNote)+6] + "#";
        }
      }
    
    }
    
    function getScale() {
    
      const majorScale = ["2M", "3M", "4p", "5p", "6M", "7M"];
    
      const minorScale = ["2M", "3m", "4p", "5p", "6m", "7m"];
    
      const melodicMinorScale = ["2M", "3m", "4p", "5p", "6M", "7M"];
    
      const harmonicMinorScale = ["2M", "3m", "4p", "5p", "6m", "7M"];
    
      const pentaBluesScale= ["3m", "4p", "5p", "7m"];
    
      const domDimScale = ["2m", "2aug", "3M", "4aug", "5p", "6M", "7m"];
    
      const alteredScale = ["2m", "2aug", "3M", "5dim", "5aug", "7m"];
    
     
    
      switch(selectEl.value) {
        case('major'):
          scaleIntervals = majorScale;
          break;
        case('minor'):
          scaleIntervals = minorScale;
          break;
        case('melodic minor'):
          scaleIntervals = melodicMinorScale;
          break;
        case('harmonic minor'):
          scaleIntervals = harmonicMinorScale;
          break;
        case('penta blues'):
          scaleIntervals = pentaBluesScale;
          break;
        case('dom dim'):
          scaleIntervals = domDimScale;
          break;
        case('altered scale'):
          scaleIntervals = alteredScale;
      }
    
      const scale = [];
     
      const toneInp = document.querySelector("input");
      const tone = toneInp.value.trim();
    
      if(!(/^[ABCDEFG]#?$|^[ABCDEFG]b?$$/.test(tone))) {
        alert("incorrect input! Try again");
        document.querySelector("#chords").innerHTML = "";
        document.querySelector("#scale").innerHTML = "";
        throw new Error("incorrect input");
      }
    
      scale.push(tone);
    
      for(interval of scaleIntervals) {
        scale.push(intervalToNote(tone, interval));
      }
    
      scale.push(tone);
    
      return scale;
    }
    
    //----------------------------
    
    function changeNote(nt) {
     
      let noteChange, freeNote, noteIndex;
    
      if(/[ABDEG]b$/.test(nt)) {
        freeNote = nt.replace("b", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 6] + "#";
    
        return noteChange;
      }
    
      if(/[ABDEG]bb$/.test(nt)) {
        freeNote = nt.replace("bb", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 6];
    
        return noteChange;
      }
    
      if(/[CF]b$/.test(nt)) {
        freeNote = nt.replace("b", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 6];
    
        return noteChange;
      }
    
      if(/[CF]bb$/.test(nt)) {
        freeNote = nt.replace("bb", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 5] + "#";
    
        return noteChange;
      }
    
      if(/[ACDFG]##$/.test(nt)) {
        freeNote = nt.replace("##", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 1];
    
        return noteChange;
      }
    
      if(/[BE]#$/.test(nt)) {
        freeNote = nt.replace("#", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 1];
    
        return noteChange;
      }
    
      if(/[BE]##$/.test(nt)) {
        freeNote = nt.replace("##", "");
    
        noteIndex =  notes.indexOf(freeNote);
    
        noteChange = notes[noteIndex + 1] + "#";
    
        return noteChange;
      }
    
      return nt;
    }
    
    
    function noteToInterval(fn, sn) {
    
      const noAccidentFirstNote = fn.replace(/[b#]/g, "");
    
      const noAccidentSecondNote = sn.replace(/[b#]/g, "");
    
      let slicedNotes = notes.slice(notes.indexOf(noAccidentFirstNote));
    
    
      let cleanInterval = slicedNotes.indexOf(noAccidentSecondNote) - slicedNotes.indexOf(noAccidentFirstNote);
    
      const semitonesSliced = semitones.slice(semitones.indexOf(changeNote(fn)));
    
      let semitonesInt = semitonesSliced.indexOf(changeNote(sn)) - semitonesSliced.indexOf(changeNote(fn));
    
      let result;
    
      if(cleanInterval === 1) {
    
        if(semitonesInt === 2) {
          result = "2M";
        }
        if(semitonesInt === 1) {
          result = "2m";
        }
        if(semitonesInt === 3) {
          result = "2aug";
        }
      }
    
      if(cleanInterval === 2) {
    
        if(semitonesInt === 4) {
          result = "3M";
        }
        if (semitonesInt === 3) {
          result = "3m";
        }
      }
    
      if(cleanInterval === 3) {
    
        if(semitonesInt === 5) {
          result = "4p";
        }
        if(semitonesInt === 4) {
          result = "4dim";
        }
        if(semitonesInt === 6) {
          result = "4aug";
        }
      }
    
      if(cleanInterval === 4) {
    
        if(semitonesInt === 7) {
          result = "5p";
        }
        if(semitonesInt === 6) {
          result = "5dim";
        }
        if(semitonesInt === 8) {
          result = "5aug";
        }
      }
    
       if(cleanInterval === 5) {
    
        if(semitonesInt === 9) {
          result = "6M";
        }
        if(semitonesInt === 8) {
          result = "6m";
        }
        if(semitonesInt === 10) {
          result = "6aug";
        }
      }
    
      if(cleanInterval === 6) {
    
        if(semitonesInt === 11) {
          result = "7M";
        }
        if(semitonesInt === 10) {
          result = "7m";
        }
        if(semitonesInt === 9) {
          result = "7dim";
        }
      }
    
      return result;
    }
    
    function chordInterval(chord) {
      let chordInt = [];
    
      for(let i = 1; i < chord.length; i++) {
        chordInt.push(noteToInterval(chord[0], chord[i]));
      }
     
      return chordInt;
    }
    
    function chordName(inputChord) {
    
      const chordInt = chordInterval(inputChord);
    
      const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i])
    
      const Mmaj7 = ["3M", "5p", "7M"];
    
      const M7 = ["3M", "5p", "7m"];
    
      const Mmaj7aug5 = ["3M", "5aug", "7M"];
    
      const m7 = ["3m", "5p", "7m"];
    
      const mmaj7 = ["3m", "5p", "7M"];
    
      const m7dim5 = ["3m", "5dim", "7m"];
    
      const dim = ["3m", "5dim", "7dim"];
     
    
      if(equals(chordInt, Mmaj7)) {
        return inputChord[0] + "maj7";
      }
    
      if(equals(chordInt, m7)) {
        return inputChord[0] + "m7";
      }
    
      if(equals(chordInt, M7)) {
        return inputChord[0] + "7";
      }
    
      if(equals(chordInt, m7dim5)) {
        return inputChord[0] + "m7b5";
      }
    
      if(equals(chordInt, dim)) {
        return inputChord[0] + "dim";
      }
     
      if(equals(chordInt, mmaj7)) {
        return inputChord[0] + "mmaj7";
      }
    
      if(equals(chordInt, Mmaj7aug5)) {
        return inputChord[0] + "maj7aug5";
      }
    }
    
    
    function harmonicField(scale) {
    
      const sevenNoteScale = scale.slice();
    
      sevenNoteScale.pop();
    
      doubledScale = [...sevenNoteScale, ...sevenNoteScale];
    
      const scaleChords = [];
    
      for(let i = 0; i<scale.length; i++) {
        scaleChords.push([doubledScale[i], doubledScale[i+2], doubledScale[i+4], doubledScale[i+6]]);
      }
     
      const harmField = [];
      scaleChords.forEach(ch => {
        harmField.push(chordName(ch));
      });
    
      return harmField.join("<br/>");
    }
    
    });
    