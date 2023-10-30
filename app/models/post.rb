class Post < ApplicationRecord
  enum post_type: { remote: 0, hybrid: 1, office: 2}

  def self.ransackable_attributes(auth_object = nil)
    ["title"]
    end
end
