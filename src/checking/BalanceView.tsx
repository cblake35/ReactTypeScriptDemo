import React, { Component } from 'react'
type BalanceViewProps = {
    balance: number
}

class BalanceView extends Component<BalanceViewProps, {}> {
    render() {
        const { balance } = this.props
        return(
            <>
                {balance}
            </>
        )
    }
}

export default BalanceView

