class User < ApplicationRecord
    has_many :ants
    validates :username, presence: true, length: {minimum: 5}, uniqueness: true
end
