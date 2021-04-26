const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

// Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding new note')
    }
})

// Remove Command
yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing note')
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
        console.log('Reading notes')
    }
})

console.log(yargs.argv)
