export function getPreview(conf){
    return {
        width: conf.width.value + "px",
        height: conf.height.value + "px",
        borderRadius: conf.borderRadius.value + "px",
        opacity: conf.opacity.value,
        backgroundColor: conf.backgroundColor.value,
        transform: "rotate(" + conf.rotate.value + "deg)",
        border: "0.1px solid #000"
    }
}