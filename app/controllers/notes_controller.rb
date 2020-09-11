class NotesController < ApplicationController

    def index 
        notes = Note.all 
        render json: notes, include: [:philosopher]
    end 
end
