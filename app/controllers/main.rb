get '/' do
  erb :generate_doc
end

get '/generate_doc' do
  erb :generate_doc
end

post '/generate' do
  @count = (params[:text]).length
  @text = Text.spanify((params[:text]))
  erb :index
end

get '/test' do
  @count = 18
  @text = "<span class='char'>T</span><span class='char'>h</span><span class='char'>e</span><span class='char'> </span><span class='char'>b</span><span class='char'>r</span><span class='char'>o</span><span class='char'>w</span><span class='char'>n</span><span class='char'> </span><span class='char'>c</span><span class='char'>o</span><span class='char'>w</span><span class='char'> </span><span class='char'>m</span><span class='char'>o</span><span class='char'>o</span><span class='char'>s</span>" 
  erb :index
end
