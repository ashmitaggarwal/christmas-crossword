import React,{useEffect}  from 'react';

function About() {
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
        document.getElementById("txt_0_0").placeholder = "1";
        document.getElementById("txt_1_8").placeholder = "2";
        document.getElementById("txt_1_14").placeholder = "3";
        document.getElementById("txt_2_0").placeholder = "4";
        document.getElementById("txt_2_7").placeholder = "5";

        document.getElementById("txt_4_5").placeholder = "6";
        document.getElementById("txt_4_9").placeholder = "7";

        document.getElementById("txt_7_0").placeholder = "8";
        document.getElementById("txt_7_18").placeholder = "9";
        document.getElementById("txt_8_10").placeholder = "10";
        document.getElementById("txt_10_3").placeholder = "11";
        document.getElementById("txt_12_15").placeholder = "12";
        document.getElementById("txt_15_2").placeholder = "13";

    }

//Stores ID of the selected cell into currentTextInput
    function textInputFocus(txtID123) {
        currentTextInput = txtID123;
    }

//Returns Array
    function preparePuzzelArray() {
        var items = [
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
        ];
        return items;
    }

    return (
        <div className="main-wrapper">
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
                    <td>2. 'Merry Christmas' in French.(6,4)</td>
                    <td>1. Popular Christmas song was actually first written for Thanksgiving.(6,5)</td>
                </tr>
                <tr>
                    <td>4. Saint that the character of Santa Claus based on. (8)</td>
                    <td>3. American government agency that tracks Santa's sleigh on Christmas Eve (5)</td>
                </tr>
                <tr>
                    <td>6. Most popular holiday plant decoration in America. (10)</td>
                    <td>5. Artist who first recorded "All I want for Christmas is My Two Front Teeth" in 1948. (5,5)</td>
                </tr>
                <tr>
                    <td>8. Festive drink made with milk,cream, sugar and beaten eggs (3,3)</td>
                    <td>7. Number of sides that a snowflakes has (3)</td>
                </tr>
                <tr>
                    <td>11. The best-selling Christmas recording of all-time? (5,9)</td>
                    <td>9. Feast of Stephen. (6,3)</td>
                </tr>
                <tr>
                    <td>13. Name of the Christmas carol about evergreen plants. (3,5,3,3,3)</td>
                    <td>10. Artist who recorded "Driving Home for Christmas". (5,3)</td>
                </tr>
                <tr>
                    <td/>
                    <td>12. Color of Christmas that Elvis Presley sung about (4)</td>
                </tr>

            </table>
        </div>
    );
}

export default About;