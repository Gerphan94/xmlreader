from myapp import create_app
import os
# os.environ["MONGODB_URI"] = 'mongodb+srv://ducpn:So4XdX2uG2n9G8v@cluster0.fboxkw8.mongodb.net/xml4210_130'
os.environ["MONGODB_URI"] = 'mongodb://localhost:27017/xml4210_130'

app = create_app()


if __name__=="__main__":
    app.run(debug=True)