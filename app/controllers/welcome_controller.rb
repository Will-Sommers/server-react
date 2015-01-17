class WelcomeController < ApplicationController
  def index
    @asdf =  [
    {
      name: "Kai Wang",
      occupation: "Developer"
    }, {
      name: "Eric Q. Weinstein",
      occupation: "Greybeard"
    }, {
      name: "Caroline Steffen",
      occupation: "Developer"
    }]
  end

  def update
    @asdf =  [
    {
      name: "Kai Wang",
      occupation: "Developer"
    }, {
      name: "Eric Weinstein",
      occupation: "Greybeard"
    }, {
      name: "Caroline Steffen",
      occupation: "Developer"
    }]
    respond_to do |format|
      format.json { render json: @asdf }
    end
  end

  def form_example

  end

  def user_form_data
    render json: {
      zipcode: "07403",
      primaryDressSize: 4,
    }
  end
end
