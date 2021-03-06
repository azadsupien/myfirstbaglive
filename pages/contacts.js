import React from 'react';
import { useForm } from 'react-hook-form'; 
import { useRouter } from 'next/router';

const contacts = (props) => {
    const router = useRouter();
    const { handleSubmit } = useForm();
    
    const onSubmit = (values) => {
      const body = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                whatsappnumber: values.whatsappnumber,
            };
     
      
    }

    return(
       
        <div htmlFor="True" className="flex flex-col h-screen bg-gray-100">
            
            <div htmlFor="True" className="grid place-items-center mx-2 my-20 sm:my-auto">
             
                <div htmlFor="True" className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                    px-6 py-10 sm:px-10 sm:py-6 
                    bg-white rounded-lg shadow-md lg:shadow-lg">
        
                  
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Register
                    </h2>
        
                    <form htmlFor="True" className="mt-10" method="POST" onSubmit={handleSubmit(onSubmit)}>
                      
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
                        <input id="name" type="name" name="name" placeholder="name" autoComplete="name"
                            className="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="e-mail address" autoComplete="email"
                            className="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
        
        
                      
                        <label htmlFor="phone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone</label>
                        <input id="phone" type="phone" name="phone" placeholder="phone" autoComplete="current-phone"
                            className="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
                        
                        <label htmlFor="whatsappnumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">whatsappnumber</label>
                        <input id="whatsappnumber" type="whatsappnumber" name="whatsappnumber" placeholder="whatsappnumber" autoComplete="current-whatsappnumber"
                            className="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
        
                       
                        <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Register
                        </button>
        
                       
            
                    </form>
                </div>
            </div>
        </div>
)

    }

    
export default (contacts);