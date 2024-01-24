let title = document.title
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var r = urlParams.get('r')
if (!!parseInt(r)) r = parseInt(r)

let ROOMS = [
  103, 
  '1A', 
  104, 
  105, 
  106, 
  107, 
  '1B', 
  108, 
  109, 
  113, 
  114, 
  'ATR', 
  116, 
  117, 
  120, 
  121, 
  126, 
  127, 
  '1D', 
  128, 
  129, 
  130, 
  '1E', 
  131, 
  132, 
  202, 
  203, 
  '2A', 
  204, 
  205, 
  206, 
  207, 
  '2B', 
  208, 
  209, 
  212, 
  213, 
  214, 
  220, 
  '2C', 
  222, 
  227, 
  '2D', 
  228, 
  229, 
  230, 
  231, 
  232, 
  '2E', 
  233, 
]

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
        name: 'Mariela González', 
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
        name: 'Karissa LeCroy', 
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
        name: 'Courtney Gomez'
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
        pro: 'Mr', 
        name: 'Ken Klieman', 
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
        name: 'John Carcione'
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
    people: [
      {
        pro: 'Mr', 
        name: 'Sifa Etu', 
      }, 
      {
        pro: 'Ms', 
        name: 'Wendy Gradek', 
      }, 
    ],
    description: {
      type: 'names', 
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
        pro: 'Ms', 
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
        name: 'Fannie Hsieh'
      }, 
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
        name: 'Andrea Booth', 
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
      {
        pro: 'Ms', 
        name: 'Eileen McCarthy', 
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
        name: 'Mike Tyau', 
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
        name: 'Max Cady', 
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
    people: [
      {
        name: 'Azra Tucic', 
      }
    ],
    description: {
      type: 'names', 
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
  ROOMS.forEach((r, i) => {
    if (i !== 0) nDesc += ' | '
    nDesc += `<a href="?r=${r}">${r}</a>`
  })
  document.querySelector('.rooms').innerHTML = `${nDesc}`
}
else {
  var data = data[parseInt(r)]
  var desc = ''

  if (data.description.type === 'room') {
    var rooms = data.rooms
    var newRooms = Object.assign([], rooms)
    var lastRoom = newRooms.pop()

    var roomsStr = ''
    newRooms.forEach(function(room, i) {
      if (i === 0) roomsStr += room
      else roomsStr += `, ${room}`
    })
    roomsStr += ` and ${lastRoom}`

    desc = `Outside of ${roomsStr}.`
  }
  else if (data.description.type === 'names') {
    var people = data.people
    var newPeople = Object.assign([], people)
    var lastPerson = newPeople.pop()

    var peopleStr = ''
    newPeople.forEach(function(person, i) {
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
        email = `${email[0][0]}${email[1]}`
        if (!!email) email += '@dtechhs.org'
      }

      if (i !== 0) peopleStr += `, `
      peopleStr += `<a href="https://contacts.google.com/${email}">${displayName}</a>`
    })

    var lastName = lastPerson.name
    var lastDisplayName = lastName
    var lastEmail = ''

    if (!!lastPerson.pro) {
      if (lastDisplayName.includes(' ')) {
        lastDisplayName = lastDisplayName.split(' ')
        lastDisplayName = name.split(`${lastDisplayName[0]} `)[1]
      }
      displayName = `${person.pro}. ${displayName}`
    }

    if (lastName.includes(' ')) {
      lastEmail = lastName.split(' ')
      lastEmail = `${lastEmail[0][0]}${lastEmail[1]}`
      if (!!lastEmail) lastEmail += '@dtechhs.org'
    }
    peopleStr += ` and <a href="https://contacts.google.com/${lastEmail}">${lastDisplayName}</a>'s`.replace("s's", "s'")

    desc = `${peopleStr} room.`
  }
  if (!!desc === false) {
    desc = data.description
  }
  if (!!desc.custom) desc = desc.custom

  document.body.setAttribute('align', 'center')
  document.querySelector('.room').innerHTML = r
  document.querySelector('.rooms').innerHTML = desc
  alert(desc)
}