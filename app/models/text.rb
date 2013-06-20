class Text < ActiveRecord::Base
  
  def self.spanify(entry)
    entry.split("").map {|char| "<span class='char'>"+char+"</span>"}.join("")
  end

end
