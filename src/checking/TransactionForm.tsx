import React, { Component } from 'react'

type TransactionFormProps = {
    handleSubmit(number: number): void
}

type TransactionFormState = {
    amount: number
}

class TransactionForm extends Component<TransactionFormProps, TransactionFormState> {
    state = {
        amount: 0
    }

    submitTransaction = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.amount)
    }

    render() {
        return (
            <form onSubmit={this.submitTransaction}>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ amount: +e.currentTarget.value }) }} type='number'></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default TransactionForm
