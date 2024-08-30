# frozen_string_literal: true
class CreateClassroomTopics < ActiveRecord::Migration[7.1]
  def change
    create_table :classroom_topics do |t|
      t.string :title
      t.integer :order_number

      t.timestamps
    end
  end
end
