WebsocketRails::EventMap.describe do
  # You can use this file to map incoming events to controller actions.
  # One event can be mapped to any number of controller actions. The
  # actions will be executed in the order they were subscribed.
  #
  # Uncomment and edit the next line to handle the client connected event:
  #   subscribe :client_connected, :to => Controller, :with_method => :method_name
  #
  # Here is an example of mapping namespaced events:
  #   namespace :product do
  #     subscribe :new, :to => ProductController, :with_method => :new_product
  #   end
  # The above will handle an event triggered on the client like `product.new`.

  # namespace :posts do
  #   # using a Hash to specify the target
  #   subscribe :create_post, :to => PostsController, :with_method => :send_mess
  #
  #   subscribe :new, :to => PostsController, :with_method => :send_mess
  # end

  # subscribe :new, :to => ChatController, :with_method => :send_mess

  subscribe :create_posts, :to => ChatController, :with_method => :send_mess

  subscribe :new_message, :to => ChatController, :with_method => :incoming_message


end
