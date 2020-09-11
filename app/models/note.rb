class Note < ApplicationRecord
  belongs_to :philosopher
  belongs_to :branch
end
