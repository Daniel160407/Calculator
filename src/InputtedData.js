class InputtedData {
    constructor(var1, var2, command) {
        this.var1 = var1;
        this.var2 = var2;
        this.command = command;
    }

    setVar(number) {
        if (this.var1 === undefined||this.var1===null) {
            this.var1 = number;
        } else {
            this.var2 = number;
        }
    }

    setCommand(command) {
        this.command = command;
    }

    calculate() {
        let result;
        switch (this.command) {
            case "+":
                result = this.var1 + this.var2;
                break;
            case "-":
                result = this.var1 - this.var2;
                break;
            case "*":
                result = this.var1 * this.var2;
                break;
            case "/":
                result = this.var1 / this.var2;
                break;
            default:
                result = "Invalid command";
                break;
        }
        document.getElementById("result").innerText = result;
    }
    
    reset(){
        this.var1=null;
        this.var2=null;
        this.command=null;
        document.getElementById("result").innerText="";
    }
}

export default InputtedData;