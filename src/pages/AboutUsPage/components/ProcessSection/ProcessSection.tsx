import React from 'react'
import './ProcessSection.scss'
import sliceProcessImg from '../../../../assets/aboutPage/SliceProcessImg.png'
import pickledProcessImg from '../../../../assets/aboutPage/PickledProcessImg.png'
import bakeProcessImg from '../../../../assets/aboutPage/BakeProcessImg.png'
import rosemaryImg from '../../../../assets/aboutPage/rosemary.png'
import rosemaryImgBottom from '../../../../assets/aboutPage/rosemaryBottom.png'

export const ProcessSection: React.FC = () => {
    return (
        <div className="processSection">
            <img
                className="rosemaryImg"
                src={rosemaryImg}
                alt="Rosemary image"
            />
            <div className="processSectionContainer">
                <h1 className="processTitle">Sophisticated Process</h1>
                <div className="sliceProcess">
                    <img
                        className="sliceProcessImg"
                        src={sliceProcessImg}
                        alt="Slice process image"
                    />
                    <div className="processDetails">
                        <h1 className="processTitle">01.Slice</h1>
                        <p className="processDescription">
                            Slicing is the process of cutting ingredients into
                            thin, uniform pieces. It enhances texture, ensures
                            even cooking, and makes dishes visually appealing.
                            From crisp vegetables to tender meats, perfect
                            slices are essential in both prep and presentation.
                        </p>
                    </div>
                </div>
                <div className="pickledProcess">
                    <img
                        className="pickledProcessImg"
                        src={pickledProcessImg}
                        alt="Pickled process image"
                    />
                    <div className="processDetails centered">
                        <h1 className="processTitle">02.Pickled</h1>
                        <p className="processDescription">
                            Pickling is a method of preserving food in a brine
                            or vinegar solution. It adds a tangy, bold flavor
                            while extending shelf life. Often used for
                            vegetables, pickling brings a refreshing contrast to
                            rich or savory dishes.
                        </p>
                    </div>
                </div>
                <div className="bakeProcess">
                    <div className="processDetails">
                        <h1 className="processTitle">03.Bake</h1>
                        <p className="processDescription">
                            Baking uses dry heat, typically in an oven, to cook
                            food evenly. It's ideal for everything from breads
                            and pastries to casseroles and roasted vegetables.
                            This method brings out deep, rich flavors while
                            maintaining moisture and texture.
                        </p>
                    </div>
                    <img
                        className="bakeProcessImg"
                        src={bakeProcessImg}
                        alt="Bake process image"
                    />
                </div>
            </div>
            <img
                className="rosemaryBottom"
                src={rosemaryImgBottom}
                alt="Rosemary bottom image"
            />
        </div>
    )
}
