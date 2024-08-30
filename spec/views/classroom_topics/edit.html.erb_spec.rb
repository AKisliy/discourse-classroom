# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "classroom_topics/edit", type: :view do
  let(:classroom_topic) {
    ClassroomTopic.create!(
      title: "MyString",
      order_number: 1
    )
  }

  before(:each) do
    assign(:classroom_topic, classroom_topic)
  end

  it "renders the edit classroom_topic form" do
    render

    assert_select "form[action=?][method=?]", classroom_topic_path(classroom_topic), "post" do

      assert_select "input[name=?]", "classroom_topic[title]"

      assert_select "input[name=?]", "classroom_topic[order_number]"
    end
  end
end
