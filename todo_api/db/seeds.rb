# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = Todo.create!(title: "make brownies", body: "with fudge", done: true)
todo2 = Todo.create!(title: "walk dog", body: "outside", done: false)
todo3 = Todo.create!(title: "wash dishes", body: "reluctantly", done: false)
todo4 = Todo.create!(title: "finish hw", body: "don't want to tho", done: false)