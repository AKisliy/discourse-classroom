# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "classroom_topics/new", type: :view do
  before(:each) do
    assign(:classroom_topic, ClassroomTopic.new(
      title: "MyString",
      order_number: 1
    ))
  end

  it "renders new classroom_topic form" do
    render

    assert_select "form[action=?][method=?]", classroom_topics_path, "post" do

      assert_select "input[name=?]", "classroom_topic[title]"

      assert_select "input[name=?]", "classroom_topic[order_number]"
    end
  end
end
