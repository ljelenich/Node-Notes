const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

// Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove Command
yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// List Command
yargs.command({
    command: 'list', 
    describe: 'View list of notes',
    handler: function() {
        console.log('My List')
    }
})

// Read Command
yargs.command({
    command: 'read', 
    describe: 'Read notes',
    handler: function() {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.parse()
// console.log(yargs.argv)
