# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Profile.destroy_all
Video.destroy_all

User.create!(email: "Email", password: "Password")

v = Video.create!(title: "test", description: "test", year: 2002, genre: "test")
# v.video_file.attach(io: open("https://endflix-seeds.s3.amazonaws.com/TestVid.mp4"), filename: "TestVid.mp4" )
v.video_file.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/TestVid.mp4"),filename: 'TestVid.mp4')
