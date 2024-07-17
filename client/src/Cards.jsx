import React from 'react' 
import { Button, Box, Stack, VStack } from "@chakra-ui/react"
import Card from './Card'
import './Cards.css'
import axios from "axios";
import "./pages/Tags/Tags.css"
//import * as api from "./api/index";
import { useNavigate } from 'react-router-dom'







const Cards = () => {
  const navigate = useNavigate();
  const checkoutHandler = async (amount) => {
    try {
        const { data: { key } } = await axios.get("https://backend1-mjst.onrender.com/api/getkey")

        const { data: { order } } = await axios.post("https://backend1-mjst.onrender.com/api/checkout", {
            amount
        })
        

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Stack-Overflow-clone Paid Plans",
            description: "Pay to ask Question",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsw-13bqG5augwlAaAFXQk7BshYGosH7bv_EvF4WLvQ&s",
            order_id: order.id,
            callback_url: "https://backend1-mjst.onrender.com/api/paymentverification",
            prefill: {
                name: "Nilabh Kumar",
                email: "nilabhkumar2121@gmail.com",
                contact: "9876543210"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
            const razor = new window.Razorpay(options);
            razor.open();
            // setPost(1); 
            // navigate('/AskQuestion');
            
    } catch (error) {
        console.log(error)
    }
}





const handleClick = () => { 
    navigate('/Pagesucess')
}

  return (
    <Box>

            <Stack h={"100vh"}  alignItems="center" justifyContent="center" direction={["row", "column"]} gap={"5rem"} backgroundColor={"#F5EDEC "} marginTop={"2rem"}>
              
            <div className='tags-list-container1 tag1' >
                    <p className='txt-plan'>Gold Plan</p>
                    <p className='txt-plan1'>Unlimited questions/day</p>
                    <p className='txt-plan2'>Rs.1000/month</p>
                    <Card amount={1000} checkoutHandler={checkoutHandler}  />
                 
                </div>
                <div className='tags-list-container1 tag1' >
                    <p className='txt-plan'>Silver plan</p>
                    <p className='txt-plan4'>5 questions/day</p>
                    <p className='txt-plan2'>Rs.100/month</p>
                    <Card amount={100} checkoutHandler={checkoutHandler} className='Card-component' />
                    
                </div>
                <div className='tags-list-container1 tag1' >
                    <p className='txt-plan'>Free<br/>Plan</p>
                    <p className='txt-plan5'>1<br/> question/day</p>
                    <p className='txt-plan3'>Free</p>
                    
                    <VStack className='card-design'>
                        <p style={{textAlign:"center"}}>₹0</p>
                        <Button  className='pay-btn' type='button' onClick={handleClick}>Pay Now</Button>
                    </VStack>
                    
                </div>
                    
                
               
            </Stack>

    </Box>
  )
}

export default Cards