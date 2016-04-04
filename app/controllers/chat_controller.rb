class ChatController < WebsocketRails::BaseController
  def send_mess
    p 'ALL OK'
    new_message = {:message => 'this is a message'}
    # send_message :messa, new_message
    broadcast_message :messa, new_message
  end

  def incoming_message
    new_message = {:message => 'this is a message'}
    broadcast_message :new_message, new_message
	end
end
