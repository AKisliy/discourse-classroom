# frozen_string_literal: true
class CreateVideos < ActiveRecord::Migration[7.1]
  def change
    create_table :videos do |t|
      t.belongs_to :classroom_topic, null: false, index: true
      t.string :link
      t.string :name
      t.string :description
      t.text :transcript
      t.text :notes

      t.timestamps
    end
  end
end
