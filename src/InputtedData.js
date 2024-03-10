class InputtedData {
    constructor() {
        this.var1 = "0";
        this.var2 = "0";
        this.command = null;
        this.permission = false;
    }

    setVar(number) {
        const result = document.getElementById('result');
        result.innerText = result.innerText === '0' ? number : result.innerText + number;

        if (!this.permission) {
            this.var1 = this.var1 === '0' ? String(number) : this.var1.toString() + number;
        } else {
            this.var2 = this.var2 === '0' ? String(number) : this.var2.toString() + number;
        }
    }


    setCommand(command) {
        this.command = command;
        this.permission = true;
        document.getElementById('result').innerText += command;
    }

    calculate() {
        this.var1 = parseInt(this.var1);
        this.var2 = parseInt(this.var2);

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

    reset() {
        this.var1 = "0";
        this.var2 = "0";
        this.command = null;
        this.permission = false;
        document.getElementById("result").innerText = "0";
    }
}

export default InputtedData;