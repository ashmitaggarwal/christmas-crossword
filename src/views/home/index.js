import React, {useEffect} from 'react';
import './style.css';

function Home() {
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
        document.getElementById("txt_0_2").placeholder = "2";
        document.getElementById("txt_0_9").placeholder = "3";
        document.getElementById("txt_2_8").placeholder = "4";
        document.getElementById("txt_3_0").placeholder = "5";
        document.getElementById("txt_3_4").placeholder = "6";
        document.getElementById("txt_4_10").placeholder = "7";
        document.getElementById("txt_5_2").placeholder = "8";
        document.getElementById("txt_5_9").placeholder = "9";
        document.getElementById("txt_6_1").placeholder = "10";
        document.getElementById("txt_6_12").placeholder = "11";
        document.getElementById("txt_8_6").placeholder = "12";
        document.getElementById("txt_9_14").placeholder = "13";
        document.getElementById("txt_10_12").placeholder = "14";
        document.getElementById("txt_11_10").placeholder = "15";
        document.getElementById("txt_12_4").placeholder = "16";
        document.getElementById("txt_13_2").placeholder = "17";
        document.getElementById("txt_14_10").placeholder = "18";
        document.getElementById("txt_15_2").placeholder = "19";

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
                                Happy<br/>Holidays
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
                    <td>1. Stand underneath to get a kiss.(8)</td>
                    <td>2. Bright light leads the way.(4)</td>
                </tr>
                <tr>
                    <td>4. Wrap with paper,ribbon and a ---. (3)</td>
                    <td>3. Flaskes the fall from the sky. (4)</td>
                </tr>
                <tr>
                    <td>5. If you send some, you will receive some. (5)</td>
                    <td>6. He comes down the chimney on Christmas eve. (5,5)</td>
                </tr>

                <tr>
                    <td>7. Santa's favourite animals. (9)</td>
                    <td>8. Desire (4)</td>
                </tr>
                <tr>
                    <td>10. Wishes written on paper make this. (4)</td>
                    <td>9. A short word for Christmas. (4)</td>
                </tr>
                <tr>
                    <td>12. Santa delivers these to good children. (4)</td>
                    <td>11. They twinkle and glow. (6)</td>
                </tr>
                <tr>
                    <td>14. First word of a famous Christmas poem. (4)</td>
                    <td>12. Traditional meat for Christmas dinner. (6)</td>
                </tr>
                <tr>
                    <td/>
                    <td>13. They hang from the Christmas tree. (7)</td>
                </tr>
                <tr>
                    <td>16. Keeper of the flocks. (8)</td>
                    <td>15. What you do before giving a present. (4)</td>
                </tr>
                <tr>
                    <td>17. Freedom from war. (5)</td>
                    <td>18. --- to the World. (3)</td>
                </tr>
                <tr>
                    <td>19. The Christmas Season. (8)</td>
                </tr>
            </table>
        </div>
    );
}

export default Home;