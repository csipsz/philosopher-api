class Branch < ApplicationRecord
    has_many :philosophers 
    has_many :notes, through: :philosophers
end
