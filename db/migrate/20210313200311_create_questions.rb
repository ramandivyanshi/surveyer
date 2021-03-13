class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :description, null: false
      t.timestamps
    end
    add_reference :questions, :survey, null: false, foreign_key: {on_delete: :cascade}
  end
end
