# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "videos/new", type: :view do
  before(:each) do
    assign(:video, Video.new(
      classroom_topic: nil,
      link: "MyString",
      name: "MyString",
      description: "MyString",
      transcript: "MyText",
      notes: "MyText"
    ))
  end

  it "renders new video form" do
    render

    assert_select "form[action=?][method=?]", videos_path, "post" do

      assert_select "input[name=?]", "video[classroom_topic_id]"

      assert_select "input[name=?]", "video[link]"

      assert_select "input[name=?]", "video[name]"

      assert_select "input[name=?]", "video[description]"

      assert_select "textarea[name=?]", "video[transcript]"

      assert_select "textarea[name=?]", "video[notes]"
    end
  end
end
