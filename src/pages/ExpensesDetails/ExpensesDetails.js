import React, {useState} from 'react';

import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import StyledButton from '../../styledComponents/StyledButton';

import { v4 as uuidv4 } from 'uuid';


import './ExpensesDetails.css';

const ExpensesDetails = () =>{

    const [expenseRows, setExpenseRows] = useState([])

    const [type, setType] = useState('')
    const [year, setYear] = useState(2022)
    const [amount, setAmount] = useState(0)

    const addMonthlyExpenses = () =>{
        setExpenseRows([...expenseRows, {
            id: uuidv4(),
            type: type,
            year: year,
            amount: amount
        }])
        
        dialogClose()
    }

    const [monthlyExpenses, setMonthlyExpenses] = useState()
    const [yearlySavings, setYearlySavings] = useState()

    const handleMonthlyExpensesInput = (event)=>{
        setMonthlyExpenses(event.target.value)
    }
    const handleYearlySavingsInput = (event)=>{
        setYearlySavings(event.target.value)
    }

    const expenseColumns = [
        {
        field: 'type',
        headerName: 'Type',
        width: 150,
        },
        {
        field: 'year',
        headerName: 'Year',
        width: 150,
        },
        {
        field: 'amount',
        headerName: 'Amount',
        width: 110,
        },
    ]

    const handleTypeInput = (event)=>{
        setType(event.target.value)
    }
    const handleYearInput = (event)=>{
        setYear(event.target.value)
    }
    const handleAmountInput = (event)=>{
        setAmount(event.target.value)
    }

    const [elss, setElss] = useState(0)
    const handleElssInput = (event)=>{
        setElss(event.target.value)
    }

    const [monthlyExpenseDialogOpen, setMonthlyExpenseDialogOpen] = useState(false)

    const dialogClose = () =>{
        setType('') 
        setYear(2022) 
        setAmount(0)
        
        setMonthlyExpenseDialogOpen(false)
    }

    let monthlyExpenseDialogBox = (
        <Dialog open={monthlyExpenseDialogOpen} onClose={dialogClose}>
                <DialogTitle>Add Monthly Expenses</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="type"
                    label="Type"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={type}
                    onChange={handleTypeInput}
                />
                <TextField
                    margin="dense"
                    id="year"
                    label="Year"
                    type="number"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={year}
                    onChange={handleYearInput}
                />
                <TextField
                    margin="dense"
                    id="amount"
                    label="Amount"
                    type="number"
                    fullWidth
                    variant="outlined" 
                    color="warning"
                    value={amount}
                    onChange={handleAmountInput}
                />
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogClose}>Cancel</Button>
                    <Button onClick={addMonthlyExpenses}>Save</Button>
                </DialogActions>
        </Dialog>
    )

    return (
        <section className='section'>
            <div className='section-question'>
                <div className="question-header">
                    <h3>Monthly Expenses</h3>
                    <StyledButton onClick={()=>setMonthlyExpenseDialogOpen(!monthlyExpenseDialogOpen)}>Add</StyledButton>
                    {monthlyExpenseDialogBox}
                </div>
                <div className="question-input" style={{ height: 300, width: 500 }}>
                        <DataGrid
                            rows={expenseRows}
                            columns={expenseColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                </div>
            </div>
            <div className='section-question'>
                <div className="question-header">
                    <h3>Present Financial Status</h3>
                    <StyledButton onClick={()=>setMonthlyExpenseDialogOpen(!monthlyExpenseDialogOpen)}>Add</StyledButton>
                    {monthlyExpenseDialogBox}
                </div>
                <div className="question-input" style={{ height: 300, width: 500 }}>
                        <DataGrid
                            rows={expenseRows}
                            columns={expenseColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                </div>
            </div>
            <div className='section-question'>
                <h3>Expenses</h3>
                <div className="question-input inline-question">
                    <h4>Monthly Expenses</h4>
                    <div className="half-input">
                        <TextField 
                            id="monthlyExpenses"
                            label="Monthly Expenses" 
                            variant="outlined" 
                            color="warning"
                            value={monthlyExpenses}
                            onChange={handleMonthlyExpensesInput}
                            fullWidth
                            type="number"
                        />
                    </div>
                </div>
                <div className="question-input inline-question">
                    <h4>Yearly Savings</h4>
                    <div className="half-input">
                        <TextField 
                            id="yearlySavings"
                            label="Yearly Savings" 
                            variant="outlined" 
                            color="warning"
                            value={yearlySavings}
                            onChange={handleYearlySavingsInput}
                            fullWidth
                        />
                    </div>
                </div>
            </div>
            <div className='section-question inline-question'>
                <h3>Do you want to invest in tax saving instruments (ELSS) ? (i)</h3>
                <div className="half-input">
                        <TextField 
                            id="elss"
                            label="ELSS Amount" 
                            variant="outlined" 
                            color="warning"
                            value={elss}
                            onChange={handleElssInput}
                            fullWidth
                        />
                </div>
            </div>
            <div className='section-question'>
                <div className="question-header">
                    <h3>Upcoming Financial Events</h3>
                    <StyledButton onClick={()=>setMonthlyExpenseDialogOpen(!monthlyExpenseDialogOpen)}>Add</StyledButton>
                    {monthlyExpenseDialogBox}
                </div>
                <div className="question-input" style={{ height: 300, width: 500 }}>
                        <DataGrid
                            rows={expenseRows}
                            columns={expenseColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                </div>
            </div>
            <div className='section-question'>
                <div className="question-header">
                    <h3>Sudden Requirement History of Past</h3>
                    <StyledButton onClick={()=>setMonthlyExpenseDialogOpen(!monthlyExpenseDialogOpen)}>Add</StyledButton>
                    {monthlyExpenseDialogBox}
                </div>
                <div className="question-input" style={{ height: 300, width: 500 }}>
                        <DataGrid
                            rows={expenseRows}
                            columns={expenseColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                </div>
            </div>
        </section>
    )
}

export default ExpensesDetails