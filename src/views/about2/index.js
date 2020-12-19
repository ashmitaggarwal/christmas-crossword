import React, {useEffect} from 'react';

function About2() {
    useEffect(() => {
        initializeScreen();
    }, [])
    var currentTextInput;
    var puzzelArrayData;

//Loads the Crossword
    function initializeScreen() {
        var puzzelTable = document.getElementById("puzzel");
        puzzelArrayData = preparePuzzelArray();
        for (var i = 0; i < puzzelArrayData.length; i++) {
            var row = puzzelTable.insertRow(-1);
            var rowData = puzzelArrayData[i];
            for (var j = 0; j < rowData.length; j++) {
                var cell = row.insertCell(-1);
                if (rowData[j] !== 0) {
                    var txtID = String('txt' + '_' + i + '_' + j);
                    cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'" + ')">';
                } else {
                    cell.style.backgroundColor = "black";
                }
            }
        }
        addHint();
    }

//Adds the hint numbers
    function addHint() {
        document.getElementById("txt_0_26").placeholder = "1";
        document.getElementById("txt_5_10").placeholder = "2";
        document.getElementById("txt_6_4").placeholder = "3";
        document.getElementById("txt_7_22").placeholder = "4";
        document.getElementById("txt_8_10").placeholder = "5";
        // //
        document.getElementById("txt_11_10").placeholder = "6";
        document.getElementById("txt_13_0").placeholder = "7";
        // //
        document.getElementById("txt_15_10").placeholder = "8";
        document.getElementById("txt_17_8").placeholder = "9";
        document.getElementById("txt_17_23").placeholder = "10";
        document.getElementById("txt_20_8").placeholder = "11";
        document.getElementById("txt_20_17").placeholder = "12";


    }

//Stores ID of the selected cell into currentTextInput
    function textInputFocus(txtID123) {
        currentTextInput = txtID123;
    }

//Returns Array
    function preparePuzzelArray() {
        //27
        var items = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'h'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'a'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's', 'c', 'a', 'r', 'o', 'l', 0, 0, 'l'],
            [0, 0, 0, 0, 'r', 'u', 'd', 'o', 'l', 'p', 'h', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e', 0, 0, 0, 'n'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'i', 't', 's', 'a', 'w', 'o', 'n', 'd', 'e', 'r', 'f', 'u', 'l', 'l', 'i', 'f', 'e'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 's', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'f', 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 't', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'm', 'i', 'r', 'a', 'c', 'l', 'e', 'o', 'n', 't', 'h', 's', 't', 'r', 'e', 'e', 't'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'a', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['p', 'o', 'l', 'a', 'r', 'e', 'x', 'p', 'r', 'e', 's', 's', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'v', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'a', 'c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's', 't', 'o', 'r', 'y', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'c', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'c', 'h', 'a', 'r', 'l', 'i', 'e', 'b', 'r', 'o', 'w', 'n', 0, 0, 0, 'g', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 't', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'i', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'f', 'r', 'o', 's', 't', 'y', 't', 'h', 'e', 's', 'n', 'o', 'w', 'm', 'a', 'n', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'n', 0, 0, 0, 0, 0, 0, 'c', 0, 0, 0, 0, 0, 'c', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0, 0, 0, 0, 0, 'h', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'g', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0, 0],

        ];
        return items;
    }

    return (
        <div className="main-wrapper" id="three">
            <div className="tags">
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-1-side">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text">
                                Merry<br/>Christmas
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                        <div className="tag-side tag-1-side is-back">
                            <div className="tag-1-top"></div>
                            <div className="tag-text tag-1-text">
                                And a happy New Year
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-2-side">
                            <div className="tag-text tag-2-text">
                                God bless<br/>You!
                                <div className="rule-diagonal"></div>
                            </div>
                        </div>
                        <div className="tag-side tag-2-side is-back">
                            <div className="tag-text tag-2-text">
                                May your every wish come true
                                <div className="rule-diagonal"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    <div className="tag">
                        <div className="tag-side tag-3-side">
                            <div className="tag-text tag-3-text">
                                Lots of Love
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                        <div className="tag-side tag-3-side is-back">
                            <div className="tag-text tag-3-text">
                                From Loyalty Fox
                                <div className="rule-shape">&#10052;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="leftBox">
                <table id="puzzel">
                </table>
            </div>
            <div id="rightBox">
                <table>
                </table>
            </div>
            <table id="hintsTable">
                <tr>
                    <td><strong>Across:</strong></td>
                    <td><strong>Down:</strong></td>
                </tr>
                <tr>
                    <td>2. Be Humbug</td>
                    <td>1. Merry christmas ya filthy animal</td>
                </tr>
                <tr>
                    <td>3. We're all misfit toys</td>
                    <td>2. The jolliest brunch of elves this side of the nut house</td>
                </tr>
                <tr>
                    <td>5. Every time a bell rings a angel just got wings</td>
                    <td>4. 4 main food groups... Candy, candy canes, candy corn and syrup
                    </td>
                </tr>
                <tr>
                    <td>6. Faith is believing in things when common sense tells us not too.</td>
                    <td>10. Maybe christmas doesn't come from a store</td>
                </tr>
                <tr>
                    <td>7. I believe</td>
                    <td>12. The one night a year well all act a litte nicer</td>
                </tr>
                <tr>
                    <td>8. You'll shoot your eye out</td>
                    <td></td>
                </tr>
                <tr>
                    <td>9. Oh brother</td>
                    <td></td>
                </tr>
                <tr>
                    <td>11. Happy birthday</td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default About2;