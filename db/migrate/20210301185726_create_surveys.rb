class CreateSurveys < ActiveRecord::Migration[6.1]
  def change
    create_table :surveys do |t|
      t.string :name, null: false
  
      t.timestamps
    end
    add_reference :surveys, :user, null: false, foreign_key: {on_delete: :restrict}
  end
end
