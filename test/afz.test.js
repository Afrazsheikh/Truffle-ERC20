const afz  =  artifacts.require("afz") 

contract("afz", (accounts) => {
    console.log(accounts);
    before(async () =>{
        afz = await afz.deployed()

    })
    it("gives the owner of the token 1m tokens ", async ()=>  {
        let balance = await afz.balanceOf(accounts(0)) //bydefault owner is 0
        console.log(web3.utlis.fromwei(balance, 'ether'));
        assert.equal(balance, '1000000', "balance should be 1m tokens for contract creators ")
    })

    it("can tranfer token beteen accounts ", async ()=>
    {
        let amount = web3.utlis.toWei('1000', 'ether' )
        await afz.tranfer(accounts[1], amount, {from: accounts[0]})

        let balance =  await afz.balanceOf(accounts[1])
        balance = web3.utlis.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "balance should be 1k tokens for con")
    })

})