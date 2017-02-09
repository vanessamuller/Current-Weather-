require 'sinatra'

#how to respond to an HTTP GET request to'/'
get '/' do
  redirect '/index.html'
end
