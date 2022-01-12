 @mylists.each do |list_item|
        json.set! list_item.id do
            json.extract! list_item, :id, :video_id, :profile_id
        end
    end