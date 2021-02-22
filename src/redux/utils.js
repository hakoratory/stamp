export function getPreview(conf){
    return {
        width: conf.width.value + "px",
        height: conf.height.value + "px",
        borderRadius: conf.borderRadius.value + "px",
        opacity: conf.opacity.value,
        backgroundColor: conf.backgroundColor.color.hex,
        transform: "rotate(" + conf.rotate.value + "deg)",
        border: "1px solid #C0C0C0"
    }
}