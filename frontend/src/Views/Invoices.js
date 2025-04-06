import React from 'react';
import Logo from "../img/Logo1.png";
import html2canvas from "html2canvas";

import fontLora from "../fonts/Lora/static/Lora-Regular.ttf";
import fontLoraBold from "../fonts/Lora/static/Lora-Medium.ttf";

import fontPermanent from "../fonts/Permanent_Marker/PermanentMarker-Regular.ttf";

import {Document, View, Page, Text, Image, StyleSheet, Font, PDFDownloadLink} from '@react-pdf/renderer';


Font.register(
    {
        family: 'Lora',
        fonts: [
            {
                src: fontLora,
            },
            {
                src: fontLoraBold,
                fontWeight: 'bold',
            }
        ]
    },
);

Font.register(
    {
        family: 'Permanent',
        fonts: [
            {
                src: fontPermanent,
            }
        ]
    },
)

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Lora',
    },
    header: {
        backgroundColor: '#010a8b',
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        marginBottom: '40px',
        height: '150px'
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    ViewData: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        marginBottom: '30px'
    },

    table: {
        marginHorizontal: 25,
        flexDirection: 'column',
    },

    tableHeader: {
        backgroundColor: '#010a8b',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: 'white',
        padding: '14px',
        fontSize: '12px',
        fontWeight: 'bold',
    },

    bodyData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '12px',
        marginBottom: '4px',
        padding: '14px',
        borderBottomWidth: '1px',
    },

    TotalData: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 25,
        marginTop: '40px',
        fontSize: '20px',
        fontWeight: 'bold',
    }

});

const InvoiceDocument = ({ data, itemsData, total, type = 'Invoices'}) => (
    <Document>
        <Page pageNumber={1} style={styles.page} size="A4">
            <View style={styles.header}>
                <View style={styles.viewHeader}>
                    <Image src={Logo} style={{ width: '10rem', marginHorizontal: '4px'}} />
                </View>
                <View>
                    <Text style={{
                        fontSize: '2rem',
                        lineHeight: '1.5rem',
                        fontWeight: 'bold',
                        fontFamily: 'Lora',
                    }}>{type}</Text>
                </View>
            </View>

            {data.map((d, index) => (
                <View key={index} style={styles.ViewData}>
                    <View>
                        <View>
                            <Text style={{
                                fontWeight: 'semibold',
                                marginBottom: '10px',
                                fontSize: '20px'
                            }}>
                                Bill To: 
                            </Text>
                            <Text style={{marginBottom: '6px', fontSize: '14px'}}>{d.customer_name || 'John Doe'}</Text>
                            <Text style={{marginBottom: '6px', width: '30%', fontSize: '14px'}}>
                                {d.customer_address || '510 SaddleBrook Dr SPC #556 San Jose, CA 95127'}
                            </Text>
                            <Text style={{marginBottom: '6px', fontSize: '14px'}}>{d.customer_phone || '(000) 000-0000'}</Text>
                        </View>
                    </View>

                    <View style={{paddingRight: '10px', fontSize: '14px'}}>
                        <View style={{flexDirection: 'row', marginBottom: '4px', fontWeight: 'bold'}}>
                            <Text>Invoices #: {d.number} </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginBottom: '4px', fontWeight: 'bold'}}>
                            <Text>Date:  {d.date}</Text>
                        </View>
                    </View>
                </View>
            ))}

                
            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={{width: '100%'}}>Items Name</Text>
                    <Text style={{width: '100%'}}>Quantity</Text>
                    <Text style={{width: '100%'}}>Price</Text>
                    <Text style={{width: '100%'}}>Total</Text>
                </View>

                {itemsData.map((d, index) => (
                    <View key={index} style={styles.bodyData}>
                        <Text style={{width: '100%'}}>{d.name}</Text>
                        <Text style={{width: '100%'}}>{d.quantity}</Text>
                        <Text style={{width: '100%'}}>${d.price}</Text>
                        <Text style={{width: '100%'}}>${d.total.toFixed(2)}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.TotalData}>
                <Text>
                    Total: ${total}
                </Text>
            </View>

            <View fixed style={{
                    position: 'absolute', 
                    bottom: 24, 
                    right: 14, 
                    padding: '10px',
                    fontSize: '30px',
                    color: '#010a8b',
                    fontFamily: 'Permanent',
                }}
            >
                <Text>Thank You !</Text>
            </View>

            <View fixed style={{
                position: 'absolute',
                bottom:24,
                left: 14,
                padding: '10px',
                fontSize: '14px'
            }} >
                <View>
                    <Text style={{marginBottom: '4px'}}>
                        Address: 3811 McKee Road, San Jose, CA 95127
                    </Text>
                    <Text style={{marginBottom: '4px'}}>
                        Phone: (669) 699-6999
                    </Text>
                    <Text style={{marginBottom: '4px'}}>
                        Email: contact@bdhomegroup.us
                    </Text>
                    <Text>
                        Website: bdhomegroup.info
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
);

export const Invoices = () => {

    const [Invoice, setInvoice] = React.useState([{
        number: 0,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }),
        customer_name: "",
        customer_address: "",
        customer_email: "",
        customer_phone: "",
    }]);

    const [itemsData, setItemsData] = React.useState([{
        name: "",
        price: 0,
        total: 0,
        description: "",
        quantity: 1
    }]);

    const handleChange = (index, event, type) => {

        if (type === 'table'){
        
            const list = [...itemsData];
            const { name, value } = event.target;
        
            list[index][name] = value;
        
            if (name === "quantity" || name === "price") {
                list[index].total = list[index].quantity * list[index].price;
            }
            setItemsData(list);
        }
        else{
            const list = [...Invoice];
            const { name, value } = event.target;
        
            list[index][name] = value;    
            setInvoice(list);
        }
    };
    

    const addMoreItems = () => {
        setItemsData([...itemsData, {
            name: "",
            price: 0,
            quantity: 1,
            total: 0,
            description: "",
        }]);
    };

    const CalculateTotal = () => {
        let total = 0;
        itemsData.forEach((item) => {
            total = total + parseFloat(item.total);
        });
        return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(total);    
    };
    const downloadInvoices = () => {
        const input = document.getElementById("invoice");
        html2canvas(input, { 
            useCORS: true,
            onclone: function (clonedDoc) {
                const inputs = clonedDoc.querySelectorAll("input, textarea");
                inputs.forEach((input) => {
                const span = clonedDoc.createElement("span");
                span.textContent = input.value;
                span.style.cssText = window.getComputedStyle(input).cssText;
                input.replaceWith(span);
            });
        }
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "invoice.png";
            link.click();
            setItemsData([{}]);
        });
    };

    const removeItem = (index) => {
        const list = [...itemsData];
        if (list.length === 1){
            setItemsData([{
                name: "",
                price: 0,
                total: 0,
                description: "",
                quantity: 1
            }]);
        }
        else {        
            list.splice(index, 1);
            setItemsData(list);
        }
    };

    return (

        <section className=' w-screen h-full pt-12 lg:p-12 p-2 font-Lora'>

            {/* <PDFViewer style={{ width: "100%", height: "100%" }}>
                <InvoiceDocument data={Invoice} itemsData={itemsData} total={CalculateTotal()} />
            </PDFViewer> */}

            <div id='invoice' className=' lg:block hidden mx-auto shadow-2xl h-full max-w-screen-lg'>
                <div className=' flex flex-col'>
                    <div className=' bg-invoice-blue text-white flex px-8 py-4 justify-between items-center'>
                        <div className=' flex items-center space-x-4'>
                            <img className=' w-40' src={Logo} alt=" logo" />
                            <div className=' flex font-bold space-y-1 flex-col'>
                                <h2>
                                    3811 McKee Road, San Jose, CA 95127
                                </h2>
                                <span>
                                    Phone: (669) 699-6999
                                </span>
                                <span>
                                    Email: contact@bdhomegroup.us
                                </span>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className=' text-4xl tracking-wide text-white font-bold'>Invoices</h1>
                        </div>
                    </div>
                    <div className='px-8 py-4 flex justify-between'>
                        <div className=' flex flex-col'>
                            <h3 className=' font-bold text-md tracking-wider text-black'>
                                Bill To:
                            </h3>
                            <input className=' py-2 outline-none border-b text-sm' type="text" placeholder='Customer Name' />
                            <textarea className=' py-2 resize-none outline-none border-b text-sm' type="text" placeholder='Customer Address' />
                            <input className=' py-2 outline-none border-b text-sm' type="text" placeholder='Customer Phone' />
                        </div>
                        <div className=' flex text-gray-500 flex-col space-y-2'>
                            <div className=' flex space-x-2'>
                                <h4 className='tracking-wide'>
                                    Invoice #: 
                                </h4>
                                <input className='outline-none border-b' type="number" placeholder='Number' />
                            </div>
                            <div className=' flex space-x-2'>
                                <h4 className='tracking-wide'>
                                    Date: 
                                </h4>
                                <input className='outline-none border-b' type="text" placeholder={new Date().toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                })} />
                            </div>
                        </div>
                    </div>
                    <hr className=' mx-4 border-invoice-blue'></hr>
                    <div className=' px-8 py-4'>
                        <table className='table-fixed w-full'>
                            <thead className=' bg-invoice-blue text-white'>
                                <tr>
                                    <th className='p-4 text-left'>Items</th>
                                    <th className='p-4 text-left'>Description</th>
                                    <th className='p-4 text-left'>Quantity</th>
                                    <th className='p-4 text-left'>Price</th>
                                    <th className='p-4 text-left'>Total</th>
                                    <th className='p-4 text-left'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemsData.map((item, index) => (
                                    <tr key={index} className=' text-sm border-b'>
                                        <td className='p-4'>
                                            <input name='name' className=' outline-none border-none' type="text" placeholder='Item Name' />
                                        </td>
                                        <td className='p-4'>
                                            <input name='description' className=' outline-none border-none' type="text" placeholder='Description....' />
                                        </td>
                                        <td className='p-4'>
                                            <input name='quantity' value={item.quantity} onChange={(e) => handleChange(index, e, 'table')} className=' outline-none border-none' type="number" placeholder={item.quantity} />
                                        </td>
                                        <td className='p-4'>
                                            <input name='price' value={item.price === 0 ? '$' : item.price} onChange={(e) => handleChange(index, e, 'table')} className=' outline-none border-none' type="number" placeholder={ item.price === 0 ? '$' : item.price} />
                                        </td>
                                        <td className='p-4'>
                                            <input disabled name='total' onChange={(e) => handleChange(index, e)} value={item.total === 0 ? '$' : item.total.toFixed(2)} className=' outline-none border-none' type="number" placeholder={ item.total === 0 ? '$' : item.total.toFixed(2)} />
                                        </td>
                                        <td className='p-4'>
                                            <button onClick={() => removeItem(index)}>
                                                <span className=' p-4 text-red-600'>X</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className=' px-8 py-4'>
                        <div className=' flex flex-col text-lg items-end'>
                            <div className=' flex space-x-2'>
                                <span className=' font-bold'>Total: </span>
                                <span>${CalculateTotal()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Devices  */}

            <div className=' lg:hidden flex justify-center space-x-4 mb-6'>
                <PDFDownloadLink 
                    document={<InvoiceDocument data={Invoice} itemsData={itemsData} total={CalculateTotal()} />}
                    fileName='invoice.pdf'
                >
                    {({ blob, url, loading, error }) =>

                        loading ?

                        <button className=' bg-emerald-600 px-4 rounded-lg shadow-lg py-2 text-white'>
                            <span>Loading Invoices....</span>
                        </button>:

                        <button className=' bg-emerald-600 px-4 rounded-lg shadow-lg py-2 text-white'>
                            <span>Download Invoices</span>
                        </button>
                    }
                </PDFDownloadLink>
                <PDFDownloadLink 
                    document={<InvoiceDocument type='Receipt' data={Invoice} itemsData={itemsData} total={CalculateTotal()} />}
                    fileName='invoice.pdf'
                >
                    {({ blob, url, loading, error }) =>

                        loading ?

                        <button className=' bg-blue-600 px-4 rounded-lg shadow-lg py-2 text-white'>
                            <span>Loading Receipt....</span>
                        </button>:

                        <button className=' bg-blue-600 px-4 rounded-lg shadow-lg py-2 text-white'>
                            <span>Download Receipt</span>
                        </button>
                    }
                </PDFDownloadLink>
            </div>

            <div className=' lg:hidden shadow-2xl rounded-2xl px-4 py-8'>
                <div className=' mb-8 text-md space-y-4'>
                    {Invoice.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className=' flex items-center gap-x-2'>
                                <label className=' font-bold text-md tracking-wider text-black'>
                                    Invoice Number:
                                </label>
                                <input name='number' onChange={(e) => handleChange(index, e)} className='outline-none border-b text-sm' type="number" placeholder={item.number} />
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <label className=' font-bold text-md tracking-wider text-black'>
                                    Today's Date:
                                </label>
                                <input name='date' onChange={(e) => handleChange(index, e)} className='outline-none border-b' type="text" placeholder={item.date}
                                />
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <label className=' font-bold text-md tracking-wider text-black'>
                                    Customer Name:
                                </label>
                                <input onChange={(e) => handleChange(index, e)} name='customer_name' className='outline-none border-b' type="text" placeholder={item.customer_name !== ''? item.customer_name : 'Customer Name'}/>
                            </div>
                            <div className=' flex items-center gap-x-2'>
                                <label className=' font-bold text-md tracking-wider text-black'>
                                    Customer Phone:
                                </label>
                                <input onChange={(e) => handleChange(index, e)} name='customer_phone' className='outline-none border-b' type="text" placeholder={item.customer_phone !== ''? item.customer_phone : 'Customer Phone'} />
                            </div>
                            <div className=' flex flex-col gap-y-2'>
                                <label className=' font-bold text-md tracking-wider text-black'>
                                    Customer Address:
                                </label>
                                <input onChange={(e) => handleChange(index, e)} name='customer_address'  className='outline-none border-b' type="text" placeholder={item.customer_address !== ''? item.customer_address : 'Customer Address'} />
                            </div>
                        </React.Fragment>
                    ))}                                        
                </div>
                <table className='table-fixed mb-8 w-full'>
                    <thead className=' bg-invoice-blue text-sm text-white'>
                        <tr>
                            <th className='p-3 text-left'>Items</th>
                            <th className='p-3 text-left'>Quantity</th>
                            <th className='p-3 text-left'>Price</th>
                            <th className='p-3 text-left'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsData.map((item, index) => (
                            <tr key={index} className=' text-sm border-b'>
                                <td className=' p-3 lg:p-4'>
                                    <input value={item.name} onChange={(e) => handleChange(index, e, 'table')} name='name' className=' outline-none border-none w-full' type="text" placeholder='Name...' />
                                </td>
                                <td className='p-3 lg:p-4'>
                                    <input name='quantity' value={item.quantity} onChange={(e) => handleChange(index, e, 'table')} className=' outline-none border-none w-full' type="number" placeholder={item.quantity} />
                                </td>
                                <td className='p-3 lg:p-4'>
                                    <input name='price' value={item.price === 0 ? '$' : item.price} onChange={(e) => handleChange(index, e, 'table')} className=' outline-none border-none w-full' type="number" placeholder={ item.price === 0 ? '$' : item.price} />
                                </td>
                                <td className='p-3 lg:p-4'>
                                    <input name='total' onChange={(e) => handleChange(index, e)} value={item.total === 0 ? '$' : item.total} className=' outline-none border-none w-full' type="number" placeholder={ item.total === 0 ? '$' : item.total} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className=' px-4 py-4'>
                    <div className=' flex justify-between items-center text-lg'>
                        <button onClick={() => removeItem(itemsData.length - 1)} className=' bg-red-400 text-white text-sm rounded-full shadow-lg px-8 py-2'>
                            <span className=''>
                                Remove Item
                            </span>
                        </button>
                        <div className=' flex space-x-2'>
                            <span className=' font-bold'>Total: </span>
                            <span>${CalculateTotal()}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center lg:space-x-6  lg:space-y-0 space-y-4 mt-12 justify-center'>
                <button onClick={() => addMoreItems()} className=' w-[180px] rounded-full shadow-2xl py-2 text-white bg-invoice-blue'>
                    Add More Items
                </button>
                <button onClick={() => downloadInvoices()} className=' w-[180px] hidden lg:block rounded-full shadow-2xl py-2 text-white bg-invoice-blue'>
                    Download Invoice
                </button>
            </div>
        </section>
    )
}
