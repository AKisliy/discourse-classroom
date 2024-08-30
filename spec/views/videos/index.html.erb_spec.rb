# frozen_string_literal: true
require 'rails_helper'

RSpec.describe "videos/index", type: :view do
  before(:each) do
    assign(:videos, [
      Video.create!(
        classroom_topic: nil,
        link: "Link",
        name: "Name",
        description: "Description",
        transcript: "MyText",
        notes: "MyText"
      ),
      Video.create!(
        classroom_topic: nil,
        link: "Link",
        name: "Name",
        description: "Description",
        transcript: "MyText",
        notes: "MyText"
      )
    ])
  end

  it "renders a list of videos" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Link".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Description".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
  end
end
