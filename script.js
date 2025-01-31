let title = document.title
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var r = urlParams.get('r')
if (!!parseInt(r)) r = parseInt(r)

function parsePerson(person, i) {
  var peopleStr = ''
  var name = person.name
  var displayName = name
  var email = ''

  if (!!person.pro) {
    if (displayName.includes(' ')) {
      displayName = displayName.split(' ')
      displayName = name.split(`${displayName[0]} `)[1]
    }
    displayName = `${person.pro}. ${displayName}`
  }

  if (name.includes(' ')) {
    email = name.split(' ')
    email = `${email[0][0]}${email[1]}`.toLowerCase()
    if (!!email) email += '@dtechhs.org'
  }

  if (i !== 0) peopleStr += `, `
  peopleStr += `<a href="https://contacts.google.com/${email}">${displayName}</a>`

  return peopleStr
}

var data = {
  103: {
    people: [
      {
        pro: 'Mr', 
        name: 'Joe Schneider',
      }, 
    ], 
    description: {
      type: 'names', 
    },
  }, 
  '1A': {
    description: {
      type: 'Outside',
    }, 
    rooms: [
      103, 
      104, 
      105, 
    ]
  },
  104: {
    people: [
      {
        name: 'Paul Cerra'
      }
    ],
    description: {
      type: 'names', 
    },
  }, 
  105: {
    people: [
      {
        pro: 'Ms', 
        name: 'Juan Felipe Olaya Pardo', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  106: {
    people: [
      {
        pro: 'Ms', 
        name: 'Hannah Ayers', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  107: {
    description: {
      custom: 'Storage!'
    }
  }, 
  '1B': {
    description: {
      type: 'Outside',
    }, 
    rooms: [
      106, 
      107, 
      108, 
    ]
  },
  108: {
    people: [
      {
        pro: 'Ms', 
        name: 'Jacky Schlegel', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  109: {
    people: [
      {
        pro: 'Ms', 
        name: 'Liz Ramirez', 
      }, 
      {
        name: 'Claudia Rask'
      }, 
    ],
    description: {
      type: 'names', 
    }
  }, 
  113: {
    description: {
      custom: 'Dragon Dining!<br>On thr first floor!'
    }
  }, 
  114: {
    people: [
      {
        pro: 'Mr', 
        name: 'Leo Stern', 
      }, 
      {
        pro: 'Mr', 
        name: 'Wayne Brock', 
      }, 
    ],
    description: {
      type: 'names', 
    }
  }, 
  'ATR': {
    people: [
      {
        name: 'Abbie Rosete'
      }
    ],
    description: {
      custom: 'The Main Meeting Space and the Entryway!'
    }
  }, 
  116: {
    description: {
      custom: 'Office!'
    }
  }, 
  117: {
    people: [
      {
        pro: 'Dr', 
        name: 'Marbella Alfonzo'
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  120: {
    people: [
      {
        pro: 'Mr', 
        name: 'Greg Fenner', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  121: {
    description: {
      custom: 'Staff Room!'
    }
  }, 
  126: {
    people: [
      {
        pro: 'Ms', 
        name: 'Christina Deberry', 
      }, 
      {
        pro: 'Ms', 
        name: 'Karen Brewster', 
      }, 
      {
        pro: 'Ms', 
        name: 'Kelly Mendoza', 
      }, 
    ],
    description: {
      type: 'names', 
    }
  }, 
  127: {
    people: [
      {
        pro: 'Ms', 
        name: "Kam O'Horo", 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  '1D': {
    description: {
      type: 'Outside',
    }, 
    rooms: [
      126, 
      127, 
      128, 
      129, 
    ]
  },
  128: {
    people: [
      {
        name: 'Heather Kaech'
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  129: {
    people: [
      {
        pro: 'Ms', 
        name: 'Chelsea Glickman', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  130: {
    people: [
      {
        pro: 'Mr', 
        name: 'Eric Silva', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  '1E': {
    description: {
      type: 'Outside', 
    }, 
    rooms: [
      130, 
      131, 
      132, 
    ]
  }, 
  131: {
    description: {
      custom: 'The Athletics Room!'
    }
  }, 
  132: {
    people: [
      {
        pro: 'Mr', 
        name: 'Daniel McGowan', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  202: {
    people: [
      {
        pro: 'Dr', 
        name: 'Margarita Contreras', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  203: {
    people: [
      {
        pro: 'Ms', 
        name: 'Jasmine Sheen', 
      },
    ],
    description: {
      type: 'names', 
    }
  }, 
  '2A': {
    description: {
      type: 'Outside', 
    }, 
    rooms: [
      202, 
      203, 
      204, 
      205, 
    ]
  },
  204: {
    people: [
      {
        name: 'Nicole Cerra', 
      }, 
      {
        pro: 'Dr', 
        name: 'Ken Montgomery', 
      },
      {
        name: 'Jamie Frankos', 
      }, 
    ],
    description: {
      type: 'names', 
    }
  }, 
  205: {
    people: [
      {
        pro: 'Mr', 
        name: 'Henry Lonnemann', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  206: {
    people: [
      {
        pro: 'Ms', 
        name: 'Aruna Murthy', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  207: {
    people: [
      {
        pro: 'Ms', 
        name: 'Ingrid Mao', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  '2B': {
    description: {
      type: 'Outside',
    }, 
    rooms: [
      206, 
      207, 
      208, 
    ]
  },
  208: {
    people: [
      {
        pro: 'Mx', 
        name: 'Karen Atkinson', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  209: {
    people: [
      {
        name: 'Amanda England', 
      }, 
      {
        name: 'Molly Robertson', 
      },
    ],
    description: {
      type: 'names', 
    }
  }, 
  212: {
    people: [
      {
        name: 'Jen Trent', 
      }, 
      {
        pro: 'Ms', 
        name: 'Vicki Zettler', 
      },
      {
        pro: 'Mr', 
        name: 'Zach Pugliano', 
      },
    ],
    description: {
      type: 'names', 
    }
  }, 
  213: {
    description: {
      custom: 'The West patio!'
    }
  },
  214: {
    people: [
      {
        pro: 'Mr', 
        name: 'Mike Bam Tyau', 
      },
      {
        pro: 'Mr', 
        name: 'Max Cady', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  220: {
    people: [
      {
        pro: 'Mr', 
        name: 'Neal Addicott', 
      }
    ],
    description: {
      type: 'names', 
    }
  },
  '2C': {
    description: {
      type: 'Outside', 
    }, 
    rooms: [
      220, 
    ]
  },
  222: {
    description: {
      custom: 'The East patio!'
    }
  },
  227: {
    people: [
      {
        pro: 'Mr', 
        name: 'Guy Geva', 
      }
    ],
    description: {
      type: 'names', 
    }
  },
  '2D': {
    description: {
      type: 'Outside', 
    }, 
    rooms: [
      227, 
      228, 
      229, 
    ]
  },
  228: {
    description: {
      custom: 'Studio 1: Recording Studio!'
    }
  }, 
  229: {
    people: [
      {
        pro: 'Ms', 
        name: 'Grace Sabido', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  230: {
    people: [
      {
        pro: 'Mr', 
        name: 'Kevin Groh', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  231: {
    description: {
      custom: 'Unassigned'
    }
  }, 
  '2E': {
    description: {
      type: 'Outside', 
    }, 
    rooms: [
      230, 
      231, 
      232, 
      233, 
    ]
  },
  232: {
    people: [
      {
        pro: 'Mr', 
        name: 'Nathan Pierce', 
      }
    ],
    description: {
      type: 'names', 
    }
  }, 
  233: {
    people: [
      {
        name: 'Hanan Holloway', 
      }, 
      {
        name: 'Ashley Wong', 
      },
    ],
    description: {
      type: 'names', 
    }
  }, 
}

if (!!r === false) {
  document.body.setAttribute('align', 'center')
  var nDesc = ''
  Object.keys(data).forEach((r, i) => {
    if (i !== 0) nDesc += ' | '
    nDesc += `<a href="?r=${r}">${r}</a>`
  })
  document.querySelector('.rooms').innerHTML = `${nDesc}`
}
else {
  var data = data[parseInt(r)]
  var desc = ''

  if (data.description.type === 'Outside') {
    var rooms = data.rooms
    var newRooms = Object.assign([], rooms)

    var roomsStr = ''
    if (newRooms.length > 1) {
      var lastRoom = newRooms.pop()
      newRooms.forEach(function(room, i) {
        if (i === 0) roomsStr += room
        else roomsStr += `, ${room}`
      })
      roomsStr += ` and ${lastRoom}`
  
    }
    else {
      roomsStr = newRooms[0]
    }
    desc = `Outside of ${roomsStr}.`
    
  

  }
  else if (data.description.type === 'names') {
    var people = data.people
    var newPeople = Object.assign([], people)

    var peopleStr = ''
    if (newPeople.length > 1) {
      var lastPerson = newPeople.pop()

      newPeople.forEach(function(person, i) {
        peopleStr += parsePerson(person, i)
      })
  
      peopleStr += ` and ${parsePerson(person, -1)}'s`.replace(`s's`, `s'`)
    }
    else {
      var person = newPeople[0]
      peopleStr += parsePerson(person, -1)
    }

    desc = `${peopleStr} room.`
  }
  if (!!desc === false) {
    desc = data.description
  }
  if (!!desc.custom) desc = desc.custom

  document.body.setAttribute('align', 'center')
  document.querySelector('.room').innerHTML = r
  document.querySelector('.rooms').innerHTML = desc
}