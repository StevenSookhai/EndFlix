# json.extract! @profile, :id, :name

    # @my_list.each do |list_item|
    #     json.set! list_item.id do
            json.extract! @list , :id ,:video_id, :profile_id
#         end
# end