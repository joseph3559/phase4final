class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/reviews" do
      reviews = Review.all.order(:created_at)
      reviews.to_json
  end

  post "/reviews" do
      review = Review.create(
          title:params[:title],
          content:params[:content]
      )
      review.to_json
  end

  delete "/reviews/:id" do
      review = Review.find(params[:id])
      review.destroy
      review.to_json
  end
  patch "/reviews/:id" do
    review =Review.find(params[:id])
    review.update(
      title: params[:title],
      content: params[:content]
    )
    review.to_json
   end
end