import pickle
import numpy as np
import pandas as pd
from flask import Flask, render_template, request
app = Flask(__name__)

df = pd.read_csv("disease.csv")
df_test = pd.read_csv("disease_testing.csv")
df_symptom_description = pd.read_csv("symptom_Description.csv")

# diseases=df.prognosis
# disease_array = np.array(diseases)
# disease_array.sort()
# d=np.unique(disease_array)




model = pickle.load(open('model.pkl','rb'))

@app.route('/') 
def index(): 
     return render_template('index.html') 

@app.route('/predict',methods=['GET','POST'])
def predict():
    df = pd.read_csv("disease.csv")
    diseases=df.prognosis
    disease_array = np.array(diseases)
    disease_array.sort()
    d=np.unique(disease_array)

    disease_name = df_symptom_description.Disease
    disease_name = np.array(disease_name)


    #input_data = (0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
    binary_array = []
    
    if request.method == 'POST':
    #     # Get binary values from the form and store them in a Python array
    #     #binary_values = [int(request.form[f'binary{i}'], 2) for i in range(1, 6)]
        
        
        for i in range(132):
            binary_value = request.form.get(f'binary_value_{i}')
            if binary_value == "1":
                binary_array.append(1)
            elif binary_value == "0":
                binary_array.append(0)

        # for i in range(2):
        #     print(binary_array[i])
        #changing the input data to numpy array

        input_array = np.asarray(binary_array)

        #reshaping the array 
        input_data_reshape = input_array.reshape(1,-1)

        #standardizing the input data
        std_data = (input_data_reshape-input_data_reshape.mean())/input_data_reshape.std()

        prediction = model.predict(std_data)
        print(prediction)

        for i in disease_name: 
            if(d[prediction[0]]==i):
                print(i)
                j=i
        k=list(disease_name).index(j)

        disease_description = df_symptom_description.Description
        disease_description = np.array(disease_description)

        if (prediction[0] <= 40):
            # print('The detected disease: '+d[prediction[0]])
            return render_template('index.html', prediction_text = f'The detected disease is {d[prediction[0]]}' , description_text = f'Description of the disease: {disease_description[k]}')
            
        else:
            return render_template('index.html', prediction_text = f'Disease can not be detected as per your symptoms')
        
        #print('Disease not detected as per your symptoms') 

        
        # return render_template('index.html')
    else:
        return render_template('index.html')
           

if __name__ == "__main__":
    app.run(debug=True)