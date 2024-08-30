# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "classroom_topics/show", type: :view do
  before(:each) do
    assign(:classroom_topic, ClassroomTopic.create!(
      title: "Title",
      order_number: 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/2/)
  end
end
